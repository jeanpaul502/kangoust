<?php

namespace App\Enums;

enum ProjectStatus: string
{
    case PLANNING = 'planning';
    case ARRIVING_SOON = 'arriving_soon';
    case ARRIVED = 'arrived';
    case SETTLED = 'settled';

    public function label(): string
    {
        return match ($this) {
            self::PLANNING => 'En préparation',
            self::ARRIVING_SOON => 'Arrivée imminente',
            self::ARRIVED => 'Récemment arrivé(e)',
            self::SETTLED => 'Installé(e)',
        };
    }
}
