<?php

namespace App\Models;

use App\Enums\ProjectStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserProject extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'visa_id',
        'custom_visa_name',
        'primary_goal',
        'selected_needs',
        'status',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'status' => ProjectStatus::class,
            'selected_needs' => 'array',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function visa(): BelongsTo
    {
        return $this->belongsTo(Visa::class);
    }

    /**
     * Get the display name of the visa.
     */
    public function getVisaDisplayName(): string
    {
        if ($this->visa) {
            return $this->visa->name;
        }

        return $this->custom_visa_name ?? 'Visa non précisé';
    }
}
