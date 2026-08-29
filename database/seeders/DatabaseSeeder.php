<?php

namespace Database\Seeders;

use App\Enums\CertificationStatus;
use App\Enums\JourneyPhase;
use App\Enums\JourneyStepStatus;
use App\Enums\LocationType;
use App\Enums\NeedType;
use App\Enums\ProjectStatus;
use App\Enums\TravelCompanion;
use App\Enums\UserRole;
use App\Enums\UserStatus;
use App\Enums\VerificationStatus;
use App\Models\Certification;
use App\Models\JourneyStep;
use App\Models\ProfessionalProfile;
use App\Models\Profile;
use App\Models\User;
use App\Models\UserCertification;
use App\Models\UserJourneyProgress;
use App\Models\UserProject;
use App\Models\Visa;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Seed Core Reference Catalogs
        $this->call([
            VisaSeeder::class,
            CertificationSeeder::class,
            GuideSeeder::class,
            JourneyStepSeeder::class,
        ]);

        $whvVisa = Visa::where('code', 'whv_417')->first();
        $tssVisa = Visa::where('code', 'tss_482')->first();
        $whiteCard = Certification::where('code', 'white_card')->first();
        $rsa = Certification::where('code', 'rsa')->first();
        $firstAid = Certification::where('code', 'first_aid')->first();

        // 2. Admin User
        $admin = User::firstOrCreate(
            ['email' => 'admin@kangoust.com'],
            [
                'name' => 'Admin Kangoust',
                'first_name' => 'Admin',
                'last_name' => 'Kangoust',
                'password' => Hash::make('password'),
                'role' => UserRole::ADMIN,
                'status' => UserStatus::ACTIVE,
                'email_verified_at' => now(),
                'identity_verified_at' => now(),
            ]
        );

        Profile::firstOrCreate(
            ['user_id' => $admin->id],
            [
                'current_location_type' => LocationType::ALREADY_IN_AUSTRALIA,
                'current_city' => 'Sydney',
                'current_state' => 'NSW',
                'current_country' => 'Australia',
                'nationality' => 'Australian',
                'spoken_languages' => ['en', 'fr'],
                'bio' => 'Administrateur de la plateforme Kangoust.',
                'onboarding_completed_at' => now(),
            ]
        );

        // 3. Scenario User 1 : Marie (Hors Australie / Préparation §6, §15, §130)
        $marie = User::firstOrCreate(
            ['email' => 'marie@kangoust.com'],
            [
                'name' => 'Marie Dupont',
                'first_name' => 'Marie',
                'last_name' => 'Dupont',
                'password' => Hash::make('password'),
                'role' => UserRole::USER,
                'status' => UserStatus::ACTIVE,
                'email_verified_at' => now(),
            ]
        );

        Profile::firstOrCreate(
            ['user_id' => $marie->id],
            [
                'current_location_type' => LocationType::OUTSIDE_AUSTRALIA,
                'current_country' => 'France',
                'current_city' => 'Lyon',
                'nationality' => 'French',
                'age' => 24,
                'spoken_languages' => ['fr', 'en'],
                'bio' => 'En pleine préparation de mon premier PVT en Australie ! Je cherche une chambre privée et un van pour explorer la côte Est.',
                'interests' => ['road_trips', 'surfing', 'hiking', 'photography', 'cooking'],
                'travel_companions' => TravelCompanion::ALONE,
                'target_arrival_date' => now()->addDays(37), // Exemple §15 : "Sydney dans 37 jours"
                'arrival_city' => 'Sydney',
                'arrival_airport' => 'SYD',
                'target_settlement_city' => 'Sydney',
                'planned_duration_months' => 12,
                'onboarding_completed_at' => now(),
            ]
        );

        UserProject::firstOrCreate(
            ['user_id' => $marie->id],
            [
                'visa_id' => $whvVisa?->id,
                'primary_goal' => 'work_travel',
                'selected_needs' => [
                    NeedType::HOUSING->value,
                    NeedType::VEHICLE->value,
                    NeedType::ADMIN_SUPPORT->value,
                    NeedType::COMMUNITY->value,
                    NeedType::EVENTS->value,
                ],
                'status' => ProjectStatus::PLANNING,
            ]
        );

        ProfessionalProfile::firstOrCreate(
            ['user_id' => $marie->id],
            [
                'profession_title' => 'Barista & Hospitality All-Rounder',
                'primary_industry' => 'hospitality',
                'years_of_experience' => 3,
                'skills' => ['Espresso extraction', 'Customer Service', 'Cash handling', 'English communication'],
                'target_industries' => ['hospitality', 'events'],
                'has_international_driver_license' => true,
                'is_looking_for_work' => true,
                'availability_date' => now()->addDays(40),
            ]
        );

        // Progress for Marie: Step 1 (Passeport) & Step 2 (Assurance) completed
        $stepPasseport = JourneyStep::where('slug', 'preparer-passeport-et-visa')->first();
        $stepAssurance = JourneyStep::where('slug', 'souscrire-assurance-sante')->first();
        $stepSim = JourneyStep::where('slug', 'activer-carte-sim-australienne')->first();

        if ($stepPasseport) {
            UserJourneyProgress::updateOrCreate(
                ['user_id' => $marie->id, 'journey_step_id' => $stepPasseport->id],
                ['status' => JourneyStepStatus::COMPLETED, 'completed_at' => now()]
            );
        }
        if ($stepAssurance) {
            UserJourneyProgress::updateOrCreate(
                ['user_id' => $marie->id, 'journey_step_id' => $stepAssurance->id],
                ['status' => JourneyStepStatus::COMPLETED, 'completed_at' => now()]
            );
        }
        if ($stepSim) {
            UserJourneyProgress::updateOrCreate(
                ['user_id' => $marie->id, 'journey_step_id' => $stepSim->id],
                ['status' => JourneyStepStatus::IN_PROGRESS]
            );
        }

        // 4. Scenario User 2 : Pierre (Déjà en Australie à Brisbane §9, §17)
        $pierre = User::firstOrCreate(
            ['email' => 'pierre@kangoust.com'],
            [
                'name' => 'Pierre Martin',
                'first_name' => 'Pierre',
                'last_name' => 'Martin',
                'password' => Hash::make('password'),
                'role' => UserRole::USER,
                'status' => UserStatus::ACTIVE,
                'email_verified_at' => now(),
                'phone_verified_at' => now(),
            ]
        );

        Profile::firstOrCreate(
            ['user_id' => $pierre->id],
            [
                'current_location_type' => LocationType::ALREADY_IN_AUSTRALIA,
                'current_country' => 'Australia',
                'current_city' => 'Brisbane',
                'current_state' => 'QLD',
                'nationality' => 'French',
                'age' => 28,
                'spoken_languages' => ['fr', 'en', 'es'],
                'bio' => 'Vivant à Brisbane depuis 2 ans. Passionné de road trips et de mécanique. Toujours partant pour un barbecue ou une session de surf !',
                'interests' => ['surfing', 'camping', 'mechanics', 'bbq', 'craft_beer'],
                'target_settlement_city' => 'Brisbane',
                'onboarding_completed_at' => now(),
            ]
        );

        UserProject::firstOrCreate(
            ['user_id' => $pierre->id],
            [
                'visa_id' => $tssVisa?->id,
                'primary_goal' => 'professional_career',
                'selected_needs' => [
                    NeedType::COMMUNITY->value,
                    NeedType::EVENTS->value,
                    NeedType::JOBS->value,
                ],
                'status' => ProjectStatus::SETTLED,
            ]
        );

        ProfessionalProfile::firstOrCreate(
            ['user_id' => $pierre->id],
            [
                'profession_title' => 'Electrician / Solar Installer',
                'primary_industry' => 'construction',
                'years_of_experience' => 6,
                'skills' => ['Solar panel installation', 'Wiring', 'Site safety', 'Fault finding'],
                'has_australian_driver_license' => true,
                'has_vehicle' => true,
                'is_looking_for_work' => false,
            ]
        );

        if ($whiteCard) {
            UserCertification::updateOrCreate(
                ['user_id' => $pierre->id, 'certification_id' => $whiteCard->id],
                [
                    'status' => CertificationStatus::OBTAINED,
                    'obtained_at' => now()->subYears(2),
                    'state_issued' => 'QLD',
                    'verification_status' => VerificationStatus::VERIFIED,
                ]
            );
        }

        if ($rsa) {
            UserCertification::updateOrCreate(
                ['user_id' => $pierre->id, 'certification_id' => $rsa->id],
                [
                    'status' => CertificationStatus::OBTAINED,
                    'obtained_at' => now()->subYears(1),
                    'state_issued' => 'QLD',
                    'verification_status' => VerificationStatus::VERIFIED,
                ]
            );
        }

        // 5. Scenario User 3 : Raoul (Propriétaire Sydney §24, §28, §30)
        $raoul = User::firstOrCreate(
            ['email' => 'raoul@kangoust.com'],
            [
                'name' => 'Raoul Rossi',
                'first_name' => 'Raoul',
                'last_name' => 'Rossi',
                'password' => Hash::make('password'),
                'role' => UserRole::USER,
                'status' => UserStatus::ACTIVE,
                'email_verified_at' => now(),
            ]
        );

        Profile::firstOrCreate(
            ['user_id' => $raoul->id],
            [
                'current_location_type' => LocationType::ALREADY_IN_AUSTRALIA,
                'current_country' => 'Australia',
                'current_city' => 'Sydney',
                'current_state' => 'NSW',
                'nationality' => 'Italian',
                'age' => 31,
                'spoken_languages' => ['it', 'en', 'fr'],
                'bio' => 'Hôte et colocataire à Bondi Beach. J’adore accueillir de nouveaux arrivants et leur faire découvrir les meilleurs spots de Sydney.',
                'interests' => ['surfing', 'beach_volleyball', 'italian_food'],
                'target_settlement_city' => 'Sydney',
                'onboarding_completed_at' => now(),
            ]
        );
    }
}
