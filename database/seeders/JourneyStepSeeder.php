<?php

namespace Database\Seeders;

use App\Enums\JourneyPhase;
use App\Models\Guide;
use App\Models\JourneyStep;
use Illuminate\Database\Seeder;

class JourneyStepSeeder extends Seeder
{
    public function run(): void
    {
        $checklistGuide = Guide::where('slug', 'checklist-ultime-avant-depart')->first();
        $simGuide = Guide::where('slug', 'guide-carte-sim-forfait-mobile-australie')->first();
        $bankGuide = Guide::where('slug', 'guide-ouverture-compte-banque-australie')->first();
        $tfnGuide = Guide::where('slug', 'demander-son-tfn-australien')->first();
        $cvGuide = Guide::where('slug', 'faire-un-cv-format-australien')->first();

        $steps = [
            // Phase 1 : Avant le départ (§19)
            [
                'phase' => JourneyPhase::BEFORE_DEPARTURE,
                'title' => 'Vérifier passeport & Visa officiel',
                'slug' => 'preparer-passeport-et-visa',
                'category' => 'admin',
                'short_description' => 'S’assurer de la validité de son passeport (> 6 mois) et sauvegarder la lettre d’accord de visa (Visa Grant Notice).',
                'detailed_instructions' => 'Vérifiez la date d’expiration de votre passeport et gardez une copie numérique et papier de votre Visa Grant Notice de l’Immigration australienne.',
                'guide_id' => $checklistGuide?->id,
                'is_mandatory' => true,
                'sort_order' => 1,
            ],
            [
                'phase' => JourneyPhase::BEFORE_DEPARTURE,
                'title' => 'Souscrire une assurance voyage & santé internationale',
                'slug' => 'souscrire-assurance-sante',
                'category' => 'health',
                'short_description' => 'Souscrire une assurance PVT/voyage complète couvrant les frais médicaux, hospitalisation et rapatriement.',
                'detailed_instructions' => 'Les soins en Australie ne sont pas couverts par la sécurité sociale des non-résidents et sont extrêmement onéreux. Une assurance santé type Chapka, AVI, Allianz ou GObyAVA est fortement recommandée.',
                'guide_id' => $checklistGuide?->id,
                'is_mandatory' => true,
                'sort_order' => 2,
            ],
            [
                'phase' => JourneyPhase::BEFORE_DEPARTURE,
                'title' => 'Permis de conduire international & Documents',
                'slug' => 'permis-international-documents',
                'category' => 'transport',
                'short_description' => 'Faire la demande gratuite de permis international auprès de votre administration locale avant le vol.',
                'detailed_instructions' => 'Le permis international vous permet de conduire et louer un véhicule légalement dans tous les États australiens accompagné de votre permis original.',
                'guide_id' => $checklistGuide?->id,
                'is_mandatory' => true,
                'sort_order' => 3,
            ],
            [
                'phase' => JourneyPhase::BEFORE_DEPARTURE,
                'title' => 'Réserver son logement temporaire d’arrivée',
                'slug' => 'reserver-logement-temporaire',
                'category' => 'housing',
                'short_description' => 'Réserver ses 7 à 14 premières nuits en auberge ou chez un particulier Kangoust.',
                'detailed_instructions' => 'Avoir une adresse réservée à l’arrivée permet de renseigner la carte d’entrée en douane (Incoming Passenger Card) et de se reposer du décalage horaire.',
                'guide_id' => null,
                'is_mandatory' => true,
                'sort_order' => 4,
            ],

            // Phase 2 : À l’arrivée (§20, §21, §22)
            [
                'phase' => JourneyPhase::UPON_ARRIVAL,
                'title' => 'Obtenir une carte SIM ou eSIM australienne',
                'slug' => 'activer-carte-sim-australienne',
                'category' => 'telecom',
                'short_description' => 'Choisir son opérateur (Telstra, Boost, Optus, Belong) pour disposer immédiatement d’un numéro +61.',
                'detailed_instructions' => 'Un numéro australien est indispensable pour recevoir les codes SMS des banques et être contacté par les recruteurs.',
                'recommended_providers' => [
                    [
                        'name' => 'Boost Mobile',
                        'network' => 'Full Telstra Network (99.5% coverage)',
                        'best_for' => 'Road trips, fermes et meilleur réseau global',
                        'price_range' => '$30 - $40 / mois',
                        'esim' => true,
                    ],
                    [
                        'name' => 'Belong Mobile',
                        'network' => 'Telstra Wholesale',
                        'best_for' => 'Data illimitée conservée chaque mois (Data rollover)',
                        'price_range' => '$25 - $35 / mois',
                        'esim' => true,
                    ],
                    [
                        'name' => 'Optus Prepaid',
                        'network' => 'Optus Network',
                        'best_for' => 'Grandes villes et forfaits touristiques data généreuse',
                        'price_range' => '$30 / mois',
                        'esim' => true,
                    ],
                ],
                'guide_id' => $simGuide?->id,
                'is_mandatory' => true,
                'sort_order' => 5,
            ],
            [
                'phase' => JourneyPhase::UPON_ARRIVAL,
                'title' => 'Ouvrir son compte bancaire australien',
                'slug' => 'ouvrir-compte-bancaire',
                'category' => 'banking',
                'short_description' => 'Finaliser l’ouverture de son compte en banque (NAB sans frais, CommBank, ANZ ou Westpac).',
                'detailed_instructions' => 'Rendez-vous en agence avec votre passeport et votre visa pour activer votre compte et récupérer votre carte de débit (ou l’activer sur Apple Pay / Google Wallet).',
                'recommended_providers' => [
                    [
                        'name' => 'NAB (National Australia Bank)',
                        'highlight' => '0$ de frais mensuels de compte',
                        'fee' => '$0/mois sans condition',
                        'rating' => '4.8/5',
                    ],
                    [
                        'name' => 'Commonwealth Bank (CommBank)',
                        'highlight' => 'Meilleure application mobile et réseau n°1',
                        'fee' => '$4/mois (gratuit -30 ans ou première année)',
                        'rating' => '4.9/5',
                    ],
                    [
                        'name' => 'ANZ Bank',
                        'highlight' => 'Application moderne ANZ Plus',
                        'fee' => '$0 sur compte Plus',
                        'rating' => '4.7/5',
                    ],
                ],
                'guide_id' => $bankGuide?->id,
                'is_mandatory' => true,
                'sort_order' => 6,
            ],
            [
                'phase' => JourneyPhase::UPON_ARRIVAL,
                'title' => 'Demander son TFN (Tax File Number) auprès de l’ATO',
                'slug' => 'demander-son-tfn-en-ligne',
                'category' => 'tax',
                'short_description' => 'Faire sa demande gratuite de numéro fiscal sur le site officiel ato.gov.au une fois sur le sol australien.',
                'detailed_instructions' => 'Sans TFN, votre employeur sera légalement contraint de prélever le taux maximal d’imposition (45%). La démarche en ligne prend 10 minutes.',
                'guide_id' => $tfnGuide?->id,
                'is_mandatory' => true,
                'sort_order' => 7,
            ],
            [
                'phase' => JourneyPhase::UPON_ARRIVAL,
                'title' => 'Comprendre la Superannuation & Choisir son fonds de retraite',
                'slug' => 'comprendre-la-superannuation',
                'category' => 'superannuation',
                'short_description' => 'Comprendre les cotisations retraite (11.5% payés par l’employeur en plus du salaire brut).',
                'detailed_instructions' => 'Votre employeur verse obligatoirement 11.5% de votre salaire sur un compte Super (ex: AustralianSuper, Hostplus, ART). Vous pourrez en récupérer une partie à votre départ d’Australie (DASP).',
                'guide_id' => null,
                'is_mandatory' => true,
                'sort_order' => 8,
            ],
            [
                'phase' => JourneyPhase::UPON_ARRIVAL,
                'title' => 'Carte de transport local (Opal, Myki, Go Card)',
                'slug' => 'carte-transports-en-commun',
                'category' => 'transport',
                'short_description' => 'Se déplacer dans votre ville d’arrivée : Sydney (Opal/carte bancaire), Melbourne (Myki), Brisbane (Go Card), Perth (SmartRider).',
                'detailed_instructions' => 'À Sydney, vous pouvez directement payer trains, ferrys et bus sans contact avec votre carte bancaire. À Melbourne et Brisbane, achetez la carte dédiée en gare ou 7-Eleven.',
                'guide_id' => null,
                'is_mandatory' => false,
                'sort_order' => 9,
            ],

            // Phase 3 : Installation & Emploi (§20, §12, §13)
            [
                'phase' => JourneyPhase::SETTLING_IN,
                'title' => 'Préparer son CV au format australien',
                'slug' => 'preparer-son-cv-australien',
                'category' => 'work',
                'short_description' => 'Adapter son CV selon les normes locales (pas de photo, orientation compétences, références).',
                'detailed_instructions' => 'Générez votre CV sur mesure grâce à l’outil Kangoust CV Builder prêt pour les employeurs australiens.',
                'guide_id' => $cvGuide?->id,
                'is_mandatory' => true,
                'sort_order' => 10,
            ],
            [
                'phase' => JourneyPhase::SETTLING_IN,
                'title' => 'Passer ses certifications professionnelles (White Card, RSA)',
                'slug' => 'obtenir-certifications-travail',
                'category' => 'work',
                'short_description' => 'Obtenir sa White Card (BTP/solaire) ou son RSA (bars/restauration) pour débloquer les embauches.',
                'detailed_instructions' => 'Les formations durent 1 jour et permettent de démarrer immédiatement dans les deux secteurs les plus recruteurs d’Australie.',
                'guide_id' => null,
                'is_mandatory' => false,
                'sort_order' => 11,
            ],
            [
                'phase' => JourneyPhase::SETTLING_IN,
                'title' => 'Trouver son logement longue durée ou colocation',
                'slug' => 'trouver-logement-longue-duree',
                'category' => 'housing',
                'short_description' => 'Activer sa recherche sur Kangoust et matcher avec des colocataires ou propriétaires vérifiés.',
                'detailed_instructions' => 'Définissez vos critères de budget, quartier et dates de disponibilité pour recevoir des suggestions automatiques.',
                'guide_id' => null,
                'is_mandatory' => true,
                'sort_order' => 12,
            ],
        ];

        foreach ($steps as $stepData) {
            JourneyStep::updateOrCreate(
                ['slug' => $stepData['slug']],
                $stepData
            );
        }
    }
}
