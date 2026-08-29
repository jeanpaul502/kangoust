<?php

namespace Database\Seeders;

use App\Models\Guide;
use App\Models\GuideCategory;
use Illuminate\Database\Seeder;

class GuideSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Avant le départ',
                'slug' => 'before-departure',
                'icon' => 'plane-departure',
                'description' => 'Tout préparer avant d’embarquer : passeport, assurance, budget, valise et réservation.',
                'sort_order' => 1,
            ],
            [
                'name' => 'Arrivée & Premiers jours',
                'slug' => 'arrival-first-days',
                'icon' => 'map-pin',
                'description' => 'Les 72 premières heures en Australie : aéroport, carte SIM, transports et repères.',
                'sort_order' => 2,
            ],
            [
                'name' => 'Banque, TFN & Administratif',
                'slug' => 'admin-banking-tax',
                'icon' => 'landmark',
                'description' => 'Ouvrir un compte sans frais, demander son Tax File Number et comprendre la Superannuation.',
                'sort_order' => 3,
            ],
            [
                'name' => 'Logement & Colocation',
                'slug' => 'housing-flatshare',
                'icon' => 'home',
                'description' => 'Trouver une chambre, pièges à éviter, caution (bond), baux et colocations.',
                'sort_order' => 4,
            ],
            [
                'name' => 'Véhicules & Vanlife',
                'slug' => 'vehicles-vanlife',
                'icon' => 'car',
                'description' => 'Acheter un van ou 4x4, la Rego, le contrôle technique (RWC) et l’assurance.',
                'sort_order' => 5,
            ],
            [
                'name' => 'Travail & Emploi Australien',
                'slug' => 'work-career',
                'icon' => 'briefcase',
                'description' => 'Créer son CV au format australien, démarcher, salaires minimums et certifications obligatoires.',
                'sort_order' => 6,
            ],
        ];

        $categoryModels = [];
        foreach ($categories as $cat) {
            $categoryModels[$cat['slug']] = GuideCategory::updateOrCreate(
                ['slug' => $cat['slug']],
                $cat
            );
        }

        $guides = [
            [
                'category_slug' => 'before-departure',
                'title' => 'Checklist ultime avant de décoller pour l’Australie',
                'slug' => 'checklist-ultime-avant-depart',
                'summary' => 'La liste complète et vérifiée des démarches à faire de 3 mois à 24h avant votre vol.',
                'target_phase' => 'before_departure',
                'read_time_minutes' => 7,
                'is_featured' => true,
                'tags' => ['checklist', 'passeport', 'billet', 'assurance'],
                'content' => <<<MARKDOWN
# Checklist ultime avant de décoller pour l'Australie

Bien préparer son voyage en Australie évite les mauvaises surprises à la douane ou lors des premiers jours. Voici la checklist chronologique recommandée par Kangoust :

### 3 mois avant le départ
* **Passeport** : Vérifier qu'il est valable au minimum 6 mois après votre date retour envisagée.
* **Visa accordé** : Conserver la lettre officielle d'accord (*Visa Grant Notice*) imprimée et sur votre smartphone.
* **Billet d'avion** : Comparer les vols directs et escales (Singapour, Doha, Dubaï).
* **Santé** : Effectuer un check-up médical, dentaire et renouveler vos ordonnances indispensables.

### 1 mois avant le départ
* **Assurance santé internationale (PVT/Voyage)** : Indispensable car les soins en Australie sont extrêmement onéreux (hospitalisation, rapatriement).
* **Permis International** : Demander votre permis de conduire international (obligatoire pour conduire légalement avec votre permis national).
* **Compte bancaire & Cartes** : Prévoir une carte bancaire internationale sans frais de change (Revolut, Wise) pour les premières dépenses.

### 1 semaine avant le départ
* **Logement temporaire** : Réserver au minimum vos 5 à 10 premières nuits (auberge de jeunesse / hostel ou Airbnb).
* **Numérisation des documents** : Téléverser copies de passeport, diplômes, permis et attestations sur votre coffre Kangoust.
MARKDOWN
            ],
            [
                'category_slug' => 'arrival-first-days',
                'title' => 'Choisir son forfait mobile & eSIM australienne',
                'slug' => 'guide-carte-sim-forfait-mobile-australie',
                'summary' => 'Comparatif complet entre les réseaux Telstra, Optus, Vodafone et les meilleurs forfaits prépayés (Boost, Belong, Moose).',
                'target_phase' => 'upon_arrival',
                'read_time_minutes' => 6,
                'is_featured' => true,
                'tags' => ['sim', 'esim', 'telstra', 'boost', 'optus', 'vodafone'],
                'content' => <<<MARKDOWN
# Choisir sa carte SIM & Forfait Mobile en Australie

Avoir un numéro de téléphone australien (+61) est indispensable dès le jour 1 pour votre compte bancaire, vos démarches TFN et vos employeurs.

## Les 3 réseaux physiques en Australie

1. **Telstra** : La meilleure couverture du pays (99.5% de la population et indispensable si vous partez en road trip ou travail en ferme / outback).
2. **Optus** : Très bonne couverture urbaine et régionale côtière.
3. **Vodafone (TPG)** : Bon réseau dans les grandes métropoles (Sydney, Melbourne, Brisbane), limité dans les zones reculées.

## Les MVNO recommandés (Meilleur rapport qualité / prix)

* **Boost Mobile** : Utilise l'intégralité du réseau Telstra (contrairement aux autres MVNO qui n'ont que le réseau de gros). Forfaits prépayés 28 jours avec beaucoup de data et appels internationaux souvent inclus.
* **Belong Mobile** : Filiale de Telstra avec report de données illimité (*data rollover*).
* **Moose Mobile / Amaysim** : Forfaits très économiques utilisant le réseau Optus.

## eSIM ou SIM physique ?
Si votre téléphone est compatible eSIM, vous pouvez activer votre ligne quelques heures avant l'atterrissage ou directement en Wi-Fi à l'aéroport.
MARKDOWN
            ],
            [
                'category_slug' => 'admin-banking-tax',
                'title' => 'Ouvrir un compte bancaire en Australie : Le comparatif',
                'slug' => 'guide-ouverture-compte-banque-australie',
                'summary' => 'Comparatif des Big Four (CommBank, NAB, ANZ, Westpac) et démarches d’ouverture simples et rapides.',
                'target_phase' => 'upon_arrival',
                'read_time_minutes' => 6,
                'is_featured' => true,
                'tags' => ['banque', 'commbank', 'nab', 'anz', 'westpac', 'carte'],
                'content' => <<<MARKDOWN
# Ouvrir son compte bancaire en Australie

En Australie, la quasi-totalité des paiements se fait sans contact (Apple Pay / Google Pay / Tap).

## Les « Big Four » : Quelles banques choisir ?

* **NAB (National Australia Bank)** : Très populaire chez les backpackers car **aucun frais mensuel de tenue de compte**, sans condition de versement ni limite d'âge.
* **Commonwealth Bank (CommBank)** : La plus grande banque d'Australie avec l'application mobile la plus perfectionnée et le plus grand nombre de distributeurs/agences. Frais de 4$/mois (souvent gratuits la 1ère année ou pour les moins de 30 ans).
* **ANZ & Westpac** : Banques historiques avec de bons réseaux d'agences et offres spéciales pour nouveaux arrivants.

## Documents nécessaires pour l'ouverture
1. Votre passeport original en cours de validité.
2. Votre visa (Visa Grant Notice).
3. Une adresse locale (celle de votre auberge ou logement temporaire convient).
4. Votre numéro fiscal de votre pays d'origine (TIN / NIF).
MARKDOWN
            ],
            [
                'category_slug' => 'admin-banking-tax',
                'title' => 'Demander son TFN (Tax File Number) : Démarche gratuite pas à pas',
                'slug' => 'demander-son-tfn-australien',
                'summary' => 'Guide étape par étape pour faire votre demande de TFN sur le site officiel de l’ATO sans payer d’intermédiaire.',
                'target_phase' => 'upon_arrival',
                'read_time_minutes' => 5,
                'is_featured' => false,
                'tags' => ['tfn', 'ato', 'impots', 'taxes', 'travail'],
                'content' => <<<MARKDOWN
# Demander son Tax File Number (TFN)

Le **TFN (Tax File Number)** est votre identifiant fiscal unique auprès de l'**ATO (Australian Taxation Office)**.

> **Important** : La demande de TFN est **100% GRATUITE** sur le site officiel de l'ATO (ato.gov.au). Ne payez jamais une agence tierce pour cela !

## Quand faire sa demande ?
Vous devez **obligatoirement être physiquement sur le sol australien** avec votre visa activé au passage de la frontière avant de soumettre la demande.

## Démarche en 4 étapes
1. Rendez-vous sur le portail ATO pour résidents temporaires / visa holders.
2. Renseignez vos coordonnées de passeport et adresse postale en Australie (où sera envoyée la lettre TFN).
3. Validez la soumission. Vous recevrez un numéro de référence (PRN).
4. Votre numéro TFN officiel arrive par courrier postal sous 1 à 28 jours (généralement 10 jours).
MARKDOWN
            ],
            [
                'category_slug' => 'work-career',
                'title' => 'Rédiger un CV au format australien (Australian Resume)',
                'slug' => 'faire-un-cv-format-australien',
                'summary' => 'Les règles d’or du CV australien : pas de photo, pas d’âge, structure orientée compétences et verbes d’action.',
                'target_phase' => 'settling_in',
                'read_time_minutes' => 8,
                'is_featured' => true,
                'tags' => ['cv', 'resume', 'emploi', 'recrutement', 'australie'],
                'content' => <<<MARKDOWN
# Réussir son CV au format australien (Resume)

Le marché de l'emploi en Australie possède ses propres codes culturels et juridiques stricts en matière de non-discrimination.

## Les 4 règles d'or du CV australien

1. **JAMAIS de photo** : En Australie, les lois anti-discrimination interdisent aux recruteurs de sélectionner sur le physique.
2. **Pas de date de naissance, âge ou situation maritale** : Indiquez uniquement nom, email, téléphone australien (+61) et ville (ex: Sydney, NSW).
3. **Mentionner explicitement votre visa & disponibilité** : Indiquez en haut du CV : *Visa: Working Holiday (Subclass 417) - Full work rights, Available immediately*.
4. **Inclure 2 références professionnelles** : Les employeurs australiens appellent systématiquement les anciens managers (*References available upon request* ou noms/numéros directs).

Utilisez le **Générateur de CV Kangoust** pour exporter instantanément votre CV adapté aux standards australiens !
MARKDOWN
            ],
        ];

        foreach ($guides as $guideData) {
            $catSlug = $guideData['category_slug'];
            unset($guideData['category_slug']);
            
            $cat = $categoryModels[$catSlug] ?? null;
            if ($cat) {
                $guideData['category_id'] = $cat->id;
            }

            Guide::updateOrCreate(
                ['slug' => $guideData['slug']],
                $guideData
            );
        }
    }
}
