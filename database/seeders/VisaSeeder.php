<?php

namespace Database\Seeders;

use App\Models\Visa;
use Illuminate\Database\Seeder;

class VisaSeeder extends Seeder
{
    public function run(): void
    {
        $visas = [
            [
                'name' => 'Working Holiday Visa (Subclass 417)',
                'subclass' => '417',
                'code' => 'whv_417',
                'category' => 'working_holiday',
                'description' => 'Permet aux 18-35 ans (selon passeport) de voyager et travailler jusqu’à 1 an en Australie, renouvelable sous conditions de travail régional (88 jours).',
                'work_rights_info' => 'Plein temps autorisé, maximum 6 mois par employeur (soumis à dérogations sectorielles).',
                'allows_full_time_work' => true,
                'has_regional_work_requirement' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Work and Holiday Visa (Subclass 462)',
                'subclass' => '462',
                'code' => 'whv_462',
                'category' => 'working_holiday',
                'description' => 'Équivalent du WHV 417 pour certaines nationalités avec prérequis de diplôme d’études supérieures ou niveau d’anglais.',
                'work_rights_info' => 'Plein temps autorisé, maximum 6 mois par employeur.',
                'allows_full_time_work' => true,
                'has_regional_work_requirement' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Student Visa (Subclass 500)',
                'subclass' => '500',
                'code' => 'student_500',
                'category' => 'student',
                'description' => 'Pour étudier dans un établissement australien agréé (cours de langue ELICOS, VET, Université).',
                'work_rights_info' => 'Autorisation de travail limitée à 48 heures par quinzaine pendant les cours, illimitée pendant les vacances scolaires.',
                'allows_full_time_work' => false,
                'has_regional_work_requirement' => false,
                'sort_order' => 3,
            ],
            [
                'name' => 'Temporary Skill Shortage / TSS (Subclass 482)',
                'subclass' => '482',
                'code' => 'tss_482',
                'category' => 'sponsored',
                'description' => 'Sponsoring par un employeur australien pour combler un manque de main-d’œuvre qualifiée.',
                'work_rights_info' => 'Plein temps exclusivement pour l’employeur sponsor.',
                'allows_full_time_work' => true,
                'has_regional_work_requirement' => false,
                'sort_order' => 4,
            ],
            [
                'name' => 'Skilled Independent (Subclass 189 / 190)',
                'subclass' => '189/190',
                'code' => 'skilled_independent',
                'category' => 'skilled',
                'description' => 'Visa de résidence permanente basé sur le système de points (âge, anglais, diplômes, expérience).',
                'work_rights_info' => 'Droits au travail permanents et illimités sans restriction d’employeur.',
                'allows_full_time_work' => true,
                'has_regional_work_requirement' => false,
                'sort_order' => 5,
            ],
            [
                'name' => 'Partner / Family Visa (Subclass 820/801 ou 309/100)',
                'subclass' => '820/309',
                'code' => 'partner_visa',
                'category' => 'family',
                'description' => 'Pour les conjoints de fait (de facto) ou mariés à un citoyen australien ou résident permanent.',
                'work_rights_info' => 'Droits complets au travail et accès à Medicare sous conditions.',
                'allows_full_time_work' => true,
                'has_regional_work_requirement' => false,
                'sort_order' => 6,
            ],
            [
                'name' => 'Visitor / Tourist Visa (Subclass 600 / 651 / 601)',
                'subclass' => '600/651',
                'code' => 'tourist_visa',
                'category' => 'tourist',
                'description' => 'Pour visiter l’Australie, voir des proches ou voyager jusqu’à 3, 6 ou 12 mois.',
                'work_rights_info' => 'Strictement interdit de travailler en Australie avec ce visa.',
                'allows_full_time_work' => false,
                'has_regional_work_requirement' => false,
                'sort_order' => 7,
            ],
            [
                'name' => 'Autre type de visa / Je ne sais pas encore',
                'subclass' => null,
                'code' => 'other_undecided',
                'category' => 'other',
                'description' => 'Pour les projets en cours de définition ou visas spécifiques (Training 407, Graduate 485, etc.).',
                'work_rights_info' => 'À déterminer selon le visa sélectionné.',
                'allows_full_time_work' => false,
                'has_regional_work_requirement' => false,
                'sort_order' => 8,
            ],
        ];

        foreach ($visas as $visaData) {
            Visa::updateOrCreate(
                ['code' => $visaData['code']],
                $visaData
            );
        }
    }
}
