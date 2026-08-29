<?php

namespace App\Enums;

enum VerificationStatus: string
{
    case UNVERIFIED = 'unverified';
    case PENDING = 'pending';
    case VERIFIED = 'verified';
    case REJECTED = 'rejected';
    case SUSPENDED = 'suspended';

    public function label(): string
    {
        return match ($this) {
            self::UNVERIFIED => 'Non vérifié',
            self::PENDING => 'Vérification en cours',
            self::VERIFIED => 'Vérifié',
            self::REJECTED => 'Rejeté',
            self::SUSPENDED => 'Suspendu',
        };
    }
}
