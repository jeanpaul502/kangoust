<?php

namespace App\Enums;

enum NeedType: string
{
    case HOUSING = 'housing';
    case VEHICLE = 'vehicle';
    case ADMIN_SUPPORT = 'admin_support';
    case COMMUNITY = 'community';
    case EVENTS = 'events';
    case JOBS = 'jobs';
    case PRO_PREPARATION = 'pro_preparation';
    case OTHER = 'other';

    public function label(): string
    {
        return match ($this) {
            self::HOUSING => 'Trouver un logement',
            self::VEHICLE => 'Trouver / Acheter un véhicule',
            self::ADMIN_SUPPORT => 'Accompagnement administratif (TFN, Banque, SIM...)',
            self::COMMUNITY => 'Rencontrer du monde & Communautés',
            self::EVENTS => 'Participer à des événements',
            self::JOBS => 'Trouver un travail',
            self::PRO_PREPARATION => 'Préparation professionnelle & Certifications',
            self::OTHER => 'Autres besoins',
        };
    }
}
