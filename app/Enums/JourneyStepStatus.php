<?php

namespace App\Enums;

enum JourneyStepStatus: string
{
    case TODO = 'todo';
    case IN_PROGRESS = 'in_progress';
    case COMPLETED = 'completed';
    case SKIPPED = 'skipped';

    public function label(): string
    {
        return match ($this) {
            self::TODO => 'À faire',
            self::IN_PROGRESS => 'En cours',
            self::COMPLETED => 'Terminée',
            self::SKIPPED => 'Non concerné / Ignorée',
        };
    }
}
