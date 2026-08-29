<?php

namespace App\Models;

use App\Enums\LocationType;
use App\Enums\UserRole;
use App\Enums\UserStatus;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'first_name',
        'last_name',
        'email',
        'password',
        'role',
        'status',
        'avatar_url',
        'phone',
        'phone_verified_at',
        'identity_verified_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'role' => UserRole::class,
            'status' => UserStatus::class,
            'email_verified_at' => 'datetime',
            'phone_verified_at' => 'datetime',
            'identity_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Get the user's full name.
     */
    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: function () {
                if ($this->first_name || $this->last_name) {
                    return trim("{$this->first_name} {$this->last_name}");
                }
                return $this->name ?? 'Kangoust Member';
            }
        );
    }

    // Role Checks
    public function isAdmin(): bool
    {
        return $this->role === UserRole::ADMIN;
    }

    public function isModerator(): bool
    {
        return $this->role === UserRole::MODERATOR || $this->role === UserRole::ADMIN;
    }

    // Relationships
    public function profile(): HasOne
    {
        return $this->hasOne(Profile::class);
    }

    public function project(): HasOne
    {
        return $this->hasOne(UserProject::class);
    }

    public function professionalProfile(): HasOne
    {
        return $this->hasOne(ProfessionalProfile::class);
    }

    public function userCertifications(): HasMany
    {
        return $this->hasMany(UserCertification::class);
    }

    public function certifications(): BelongsToMany
    {
        return $this->belongsToMany(Certification::class, 'user_certifications')
            ->using(UserCertification::class)
            ->withPivot(['status', 'state_issued', 'obtained_at', 'expires_at', 'certificate_number', 'document_path', 'verification_status', 'notes'])
            ->withTimestamps();
    }

    public function journeyProgress(): HasMany
    {
        return $this->hasMany(UserJourneyProgress::class);
    }

    public function organizations(): BelongsToMany
    {
        return $this->belongsToMany(Organization::class, 'organization_user')
            ->withPivot('role')
            ->withTimestamps();
    }

    public function ownedOrganizations(): HasMany
    {
        return $this->hasMany(Organization::class, 'owner_id');
    }

    // Helper: Situation check (§5)
    public function isOutsideAustralia(): bool
    {
        return $this->profile?->current_location_type === LocationType::OUTSIDE_AUSTRALIA;
    }

    public function isAlreadyInAustralia(): bool
    {
        return $this->profile?->current_location_type === LocationType::ALREADY_IN_AUSTRALIA;
    }

    /**
     * Calculate days until arrival in Australia (for §15 Dashboard)
     */
    public function getDaysUntilArrival(): ?int
    {
        if (!$this->profile?->target_arrival_date) {
            return null;
        }

        $now = now()->startOfDay();
        $arrival = $this->profile->target_arrival_date->startOfDay();

        return (int) $now->diffInDays($arrival, false);
    }

    /**
     * Calculate journey completion percentage (§15, §19, §20)
     */
    public function getJourneyCompletionPercentage(): int
    {
        $totalSteps = JourneyStep::where('is_active', true)->count();
        if ($totalSteps === 0) {
            return 0;
        }

        $completedSteps = $this->journeyProgress()
            ->where('status', \App\Enums\JourneyStepStatus::COMPLETED)
            ->count();

        return (int) round(($completedSteps / $totalSteps) * 100);
    }
}
