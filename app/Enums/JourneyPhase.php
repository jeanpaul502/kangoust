<?php

namespace App\Enums;

enum JourneyPhase: string
{
    case BEFORE_DEPARTURE = 'before_departure';
    case UPON_ARRIVAL = 'upon_arrival';
    case SETTLING_IN = 'settling_in';

    public function label(): string
    {
        return match ($this) {
            self::BEFORE_DEPARTURE => 'Avant le départ',
            self::UPON_ARRIVAL => 'À l’arrivée',
            self::SETTLING_IN => 'Installation & Vie quotidienne',
        };
    }
}
