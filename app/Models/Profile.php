<?php

namespace App\Models;

use App\Enums\LocationType;
use App\Enums\TravelCompanion;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'current_location_type',
        'current_country',
        'current_city',
        'current_state',
        'nationality',
        'age',
        'birth_date',
        'spoken_languages',
        'bio',
        'interests',
        'travel_companions',
        'target_arrival_date',
        'target_arrival_time',
        'arrival_city',
        'arrival_airport',
        'target_settlement_city',
        'planned_duration_months',
        'onboarding_completed_at',
        'onboarding_step',
        'is_public',
        'privacy_settings',
    ];

    protected function casts(): array
    {
        return [
            'current_location_type' => LocationType::class,
            'travel_companions' => TravelCompanion::class,
            'birth_date' => 'date',
            'target_arrival_date' => 'date',
            'spoken_languages' => 'array',
            'interests' => 'array',
            'privacy_settings' => 'array',
            'onboarding_completed_at' => 'datetime',
            'is_public' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
