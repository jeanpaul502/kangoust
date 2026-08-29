<?php

namespace App\Enums;

enum CertificationStatus: string
{
    case NOT_OBTAINED = 'not_obtained';
    case IN_PROGRESS = 'in_progress';
    case OBTAINED = 'obtained';

    public function label(): string
    {
        return match ($this) {
            self::NOT_OBTAINED => 'Non obtenu',
            self::IN_PROGRESS => 'En cours',
            self::OBTAINED => 'Obtenu',
        };
    }
}
