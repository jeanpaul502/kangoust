<?php

namespace App\Enums;

enum LocationType: string
{
    case OUTSIDE_AUSTRALIA = 'outside_australia';
    case ALREADY_IN_AUSTRALIA = 'already_in_australia';

    public function label(): string
    {
        return match ($this) {
            self::OUTSIDE_AUSTRALIA => 'Encore hors d’Australie',
            self::ALREADY_IN_AUSTRALIA => 'Déjà en Australie',
        };
    }
}
