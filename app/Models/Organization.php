<?php

namespace App\Models;

use App\Enums\OrganizationCategory;
use App\Enums\VerificationStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'owner_id',
        'name',
        'legal_name',
        'slug',
        'logo_url',
        'description',
        'category',
        'abn',
        'address',
        'city',
        'state',
        'postal_code',
        'phone',
        'email',
        'website',
        'contact_person_name',
        'verification_status',
        'verified_at',
        'settings',
    ];

    protected function casts(): array
    {
        return [
            'category' => OrganizationCategory::class,
            'verification_status' => VerificationStatus::class,
            'verified_at' => 'datetime',
            'settings' => 'array',
        ];
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function members(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'organization_user')
            ->withPivot('role')
            ->withTimestamps();
    }
}
