<?php

namespace App\Enums;

enum OrganizationCategory: string
{
    case REAL_ESTATE = 'real_estate';
    case RECRUITMENT = 'recruitment';
    case EMPLOYER = 'employer';
    case AUTOMOTIVE = 'automotive';
    case HOSPITALITY = 'hospitality';
    case RESTAURANT = 'restaurant';
    case CONSTRUCTION = 'construction';
    case MINING = 'mining';
    case AGRICULTURE = 'agriculture';
    case ASSOCIATION = 'association';
    case OTHER = 'other';

    public function label(): string
    {
        return match ($this) {
            self::REAL_ESTATE => 'Agence immobilière',
            self::RECRUITMENT => 'Agence d’intérim / Recrutement',
            self::EMPLOYER => 'Entreprise employeur',
            self::AUTOMOTIVE => 'Concessionnaire / Garage auto',
            self::HOSPITALITY => 'Hôtellerie / Tourisme',
            self::RESTAURANT => 'Restauration / Bar / Café',
            self::CONSTRUCTION => 'BTP / Construction',
            self::MINING => 'Secteur Minier / FIFO',
            self::AGRICULTURE => 'Ferme / Agriculture',
            self::ASSOCIATION => 'Association / Communauté',
            self::OTHER => 'Autre entreprise',
        };
    }
}
