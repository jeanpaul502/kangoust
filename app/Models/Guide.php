<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Guide extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'slug',
        'summary',
        'content',
        'read_time_minutes',
        'featured_image',
        'target_phase',
        'tags',
        'is_published',
        'is_featured',
        'views_count',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'read_time_minutes' => 'integer',
            'tags' => 'array',
            'is_published' => 'boolean',
            'is_featured' => 'boolean',
            'views_count' => 'integer',
            'sort_order' => 'integer',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(GuideCategory::class, 'category_id');
    }

    public function journeySteps(): HasMany
    {
        return $this->hasMany(JourneyStep::class);
    }
}
