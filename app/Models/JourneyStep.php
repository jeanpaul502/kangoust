<?php

namespace App\Models;

use App\Enums\JourneyPhase;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class JourneyStep extends Model
{
    use HasFactory;

    protected $fillable = [
        'phase',
        'title',
        'slug',
        'category',
        'short_description',
        'detailed_instructions',
        'recommended_providers',
        'guide_id',
        'external_url',
        'is_mandatory',
        'sort_order',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'phase' => JourneyPhase::class,
            'recommended_providers' => 'array',
            'is_mandatory' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function guide(): BelongsTo
    {
        return $this->belongsTo(Guide::class);
    }

    public function userProgress(): HasMany
    {
        return $this->hasMany(UserJourneyProgress::class);
    }
}
