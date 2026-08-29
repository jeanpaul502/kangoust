<?php

namespace App\Enums;

enum TravelCompanion: string
{
    case ALONE = 'alone';
    case COUPLE = 'couple';
    case GROUP = 'group';
    case FAMILY = 'family';

    public function label(): string
    {
        return match ($this) {
            self::ALONE => 'Seul(e)',
            self::COUPLE => 'En couple',
            self::GROUP => 'Entre amis / Groupe',
            self::FAMILY => 'En famille',
        };
    }
}
