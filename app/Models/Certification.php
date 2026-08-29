<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Certification extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'short_name',
        'code',
        'category',
        'description',
        'requirements_info',
        'is_state_specific',
        'icon',
        'is_active',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'is_state_specific' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function userCertifications(): HasMany
    {
        return $this->hasMany(UserCertification::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_certifications')
            ->using(UserCertification::class)
            ->withPivot(['status', 'state_issued', 'obtained_at', 'expires_at', 'certificate_number', 'document_path', 'verification_status', 'notes'])
            ->withTimestamps();
    }
}
