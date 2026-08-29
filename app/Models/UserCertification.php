<?php

namespace App\Models;

use App\Enums\CertificationStatus;
use App\Enums\VerificationStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class UserCertification extends Pivot
{
    use HasFactory;

    protected $table = 'user_certifications';

    protected $fillable = [
        'user_id',
        'certification_id',
        'status',
        'state_issued',
        'obtained_at',
        'expires_at',
        'certificate_number',
        'document_path',
        'verification_status',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'status' => CertificationStatus::class,
            'verification_status' => VerificationStatus::class,
            'obtained_at' => 'date',
            'expires_at' => 'date',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function certification(): BelongsTo
    {
        return $this->belongsTo(Certification::class);
    }
}
