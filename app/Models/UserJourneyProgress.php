<?php

namespace App\Models;

use App\Enums\JourneyStepStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserJourneyProgress extends Model
{
    use HasFactory;

    protected $table = 'user_journey_progress';

    protected $fillable = [
        'user_id',
        'journey_step_id',
        'status',
        'completed_at',
        'notes',
        'custom_data',
    ];

    protected function casts(): array
    {
        return [
            'status' => JourneyStepStatus::class,
            'completed_at' => 'datetime',
            'custom_data' => 'array',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function step(): BelongsTo
    {
        return $this->belongsTo(JourneyStep::class, 'journey_step_id');
    }
}
