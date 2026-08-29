<?php

namespace Database\Seeders;

use App\Models\Certification;
use Illuminate\Database\Seeder;

class CertificationSeeder extends Seeder
{
    public function run(): void
    {
        $certifications = [
            [
                'name' => 'White Card (CPCWHS1001 - Prepare to work safely in the construction industry)',
                'short_name' => 'White Card',
                'code' => 'white_card',
                'category' => 'construction',
                'description' => 'Obligatoire pour accéder à tout chantier de construction, rénovation, travaux publics ou installations solaires en Australie.',
                'requirements_info' => 'Formation d’une demi-journée à 1 jour (en présentiel ou en ligne selon l’État), pièce d’identité avec USI (Unique Student Identifier).',
                'is_state_specific' => false,
                'icon' => 'hard-hat',
                'sort_order' => 1,
            ],
            [
                'name' => 'RSA (Responsible Service of Alcohol - SITHFAB021)',
                'short_name' => 'RSA',
                'code' => 'rsa',
                'category' => 'hospitality',
                'description' => 'Indispensable pour servir de l’alcool dans les bars, restaurants, hôtels, pubs, festivals et événements en Australie.',
                'requirements_info' => 'Spécifique à chaque État (formation reconnue NSW, VIC, QLD, WA, SA). Certains États acceptent les équivalences nationales.',
                'is_state_specific' => true,
                'icon' => 'wine-glass',
                'sort_order' => 2,
            ],
            [
                'name' => 'First Aid & CPR (HLTAID011 Provide First Aid)',
                'short_name' => 'First Aid',
                'code' => 'first_aid',
                'category' => 'health',
                'description' => 'Certification de premiers secours et réanimation cardio-pulmonaire, très valorisée dans l’accueil, l’éducation, le sport et l’industrie.',
                'requirements_info' => 'Valable 3 ans (recyclage CPR annuel recommandé). Formation de 4 à 8h.',
                'is_state_specific' => false,
                'icon' => 'heart-pulse',
                'sort_order' => 3,
            ],
            [
                'name' => 'Forklift Licence (High Risk Work Licence - LF)',
                'short_name' => 'Forklift (LF)',
                'code' => 'forklift_lf',
                'category' => 'logistics',
                'description' => 'Permis cariste (chariot élévateur) obligatoire pour travailler en entrepôt logistique, usine, ferme ou port.',
                'requirements_info' => 'Formation pratique et théorique (2 à 3 jours) avec évaluation agréée WorkSafe/SafeWork.',
                'is_state_specific' => false,
                'icon' => 'truck',
                'sort_order' => 4,
            ],
            [
                'name' => 'Working at Heights (RIIWHS204E Work safely at heights)',
                'short_name' => 'Working at Heights',
                'code' => 'working_at_heights',
                'category' => 'safety',
                'description' => 'Requis pour tout travail exécuté en hauteur (toitures, échafaudages, fermes solaires, maintenance).',
                'requirements_info' => 'Formation d’une journée avec exercices de harnais et sécurisation.',
                'is_state_specific' => false,
                'icon' => 'arrow-up-right',
                'sort_order' => 5,
            ],
            [
                'name' => 'Confined Spaces (RIIWHS202E Enter and work in confined spaces)',
                'short_name' => 'Confined Spaces',
                'code' => 'confined_spaces',
                'category' => 'safety',
                'description' => 'Nécessaire pour intervenir dans les cuves, canalisations, silos et environnements confinés (mines, industrie, BTP).',
                'requirements_info' => 'Formation théorique et pratique avec utilisation de détecteurs de gaz et procédures de secours.',
                'is_state_specific' => false,
                'icon' => 'box',
                'sort_order' => 6,
            ],
            [
                'name' => 'Barista Masterclass & Food Safety (SITXFSA005)',
                'short_name' => 'Barista & Food Safety',
                'code' => 'barista_food_safety',
                'category' => 'hospitality',
                'description' => 'Maîtrise de l’extraction expresso à l’australienne (flat white, latte art) et normes d’hygiène alimentaire.',
                'requirements_info' => 'Atelier pratique de 1 à 2 jours + certification Food Handling.',
                'is_state_specific' => false,
                'icon' => 'coffee',
                'sort_order' => 7,
            ],
            [
                'name' => 'RSG / RCG (Responsible Conduct of Gambling / Gaming)',
                'short_name' => 'RSG',
                'code' => 'rsg',
                'category' => 'hospitality',
                'description' => 'Requis pour travailler dans les établissements équipés de machines à sous (pokies), casinos et clubs.',
                'requirements_info' => 'Réglementé au niveau étatique.',
                'is_state_specific' => true,
                'icon' => 'gamepad-2',
                'sort_order' => 8,
            ],
        ];

        foreach ($certifications as $certData) {
            Certification::updateOrCreate(
                ['code' => $certData['code']],
                $certData
            );
        }
    }
}
