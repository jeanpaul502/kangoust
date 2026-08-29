<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProfessionalProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'profession_title',
        'primary_industry',
        'years_of_experience',
        'skills',
        'target_industries',
        'has_australian_driver_license',
        'has_international_driver_license',
        'has_vehicle',
        'is_looking_for_work',
        'availability_date',
        'hourly_rate_expectation',
        'summary',
        'resume_data',
    ];

    protected function casts(): array
    {
        return [
            'years_of_experience' => 'integer',
            'skills' => 'array',
            'target_industries' => 'array',
            'has_australian_driver_license' => 'boolean',
            'has_international_driver_license' => 'boolean',
            'has_vehicle' => 'boolean',
            'is_looking_for_work' => 'boolean',
            'availability_date' => 'date',
            'hourly_rate_expectation' => 'decimal:2',
            'resume_data' => 'array',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
