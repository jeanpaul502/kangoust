<?php

namespace App\Http\Controllers;

use App\Enums\JourneyStepStatus;
use App\Enums\LocationType;
use App\Enums\NeedType;
use App\Enums\ProjectStatus;
use App\Enums\TravelCompanion;
use App\Models\JourneyStep;
use App\Models\Profile;
use App\Models\User;
use App\Models\UserJourneyProgress;
use App\Models\UserProject;
use App\Models\Visa;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class OnboardingController extends Controller
{
    /**
     * Display the dynamic Onboarding interface.
     */
    public function index(Request $request): Response
    {
        // For demonstration & interactive testing, get the authenticated user or default to Marie
        $user = Auth::user() ?? User::where('email', 'marie@kangoust.com')->first();
        if ($user && !Auth::check()) {
            Auth::login($user);
        }

        $profile = $user ? $user->profile : null;
        $project = $user ? $user->project : null;

        // Determine current step based on saved progress
        $currentStep = 1;
        if ($profile && $profile->onboarding_step) {
            $currentStep = (int) $profile->onboarding_step;
        } elseif ($project && $project->visa_id) {
            $currentStep = 3;
        } elseif ($profile && $profile->current_country) {
            $currentStep = 2;
        }

        $visas = Visa::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['id', 'name', 'subclass', 'code', 'category', 'description', 'work_rights_info', 'allows_full_time_work', 'has_regional_work_requirement']);

        $australianCities = [
            ['name' => 'Sydney', 'state' => 'NSW', 'airport' => 'SYD', 'tag' => 'Grandes opportunités & Plages'],
            ['name' => 'Melbourne', 'state' => 'VIC', 'airport' => 'MEL', 'tag' => 'Capitale culturelle & Cafés'],
            ['name' => 'Brisbane', 'state' => 'QLD', 'airport' => 'BNE', 'tag' => 'Climat tropical & Ensoleillé'],
            ['name' => 'Perth', 'state' => 'WA', 'airport' => 'PER', 'tag' => 'Couchers de soleil & Mines'],
            ['name' => 'Gold Coast', 'state' => 'QLD', 'airport' => 'OOL', 'tag' => 'Surf & Vie nocturne'],
            ['name' => 'Adelaide', 'state' => 'SA', 'airport' => 'ADL', 'tag' => 'Vignobles & Coût abordable'],
            ['name' => 'Cairns', 'state' => 'QLD', 'airport' => 'CNS', 'tag' => 'Grande Barrière de Corail'],
            ['name' => 'Darwin', 'state' => 'NT', 'airport' => 'DRW', 'tag' => 'Outback tropical & Aventure'],
            ['name' => 'Hobart', 'state' => 'TAS', 'airport' => 'HBA', 'tag' => 'Nature sauvage & Gastronomie'],
        ];

        $needsOptions = [
            [
                'id' => NeedType::HOUSING->value,
                'title' => 'Trouver un logement',
                'description' => 'Chambre privée, colocation ou appartement temporaire à l’arrivée.',
                'icon' => 'Home',
                'color' => 'amber',
            ],
            [
                'id' => NeedType::VEHICLE->value,
                'title' => 'Acheter ou louer un véhicule',
                'description' => 'Van aménagé, 4x4 ou citadine pour se déplacer et partir en road trip.',
                'icon' => 'Car',
                'color' => 'orange',
            ],
            [
                'id' => NeedType::ADMIN_SUPPORT->value,
                'title' => 'Démarches & Installation',
                'description' => 'Guide étape par étape pour la carte SIM, le compte bancaire et le TFN gratuit.',
                'icon' => 'FileText',
                'color' => 'cyan',
            ],
            [
                'id' => NeedType::COMMUNITY->value,
                'title' => 'Rencontrer la communauté',
                'description' => 'Échanger avec des voyageurs, des résidents et des locaux dans votre ville.',
                'icon' => 'Users',
                'color' => 'emerald',
            ],
            [
                'id' => NeedType::EVENTS->value,
                'title' => 'Participer à des événements',
                'description' => 'Barbecues, sorties plage, road trips et rassemblements communautaires.',
                'icon' => 'Calendar',
                'color' => 'purple',
            ],
            [
                'id' => NeedType::JOBS->value,
                'title' => 'Opportunités de travail',
                'description' => 'Accéder aux offres partagées par la communauté et aux filons locaux.',
                'icon' => 'Briefcase',
                'color' => 'blue',
            ],
            [
                'id' => NeedType::PRO_PREPARATION->value,
                'title' => 'CV australien & Certifications',
                'description' => 'Créer son CV au format australien et préparer White Card / RSA.',
                'icon' => 'Award',
                'color' => 'rose',
            ],
        ];

        return Inertia::render('Onboarding/Index', [
            'initialStep' => $currentStep,
            'visas' => $visas,
            'australianCities' => $australianCities,
            'needsOptions' => $needsOptions,
            'user' => $user ? [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'full_name' => $user->full_name,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
            ] : null,
            'savedData' => [
                'location_type' => $profile?->current_location_type?->value ?? 'outside_australia',
                'current_country' => $profile?->current_country ?? 'France',
                'current_city' => $profile?->current_city ?? '',
                'current_state' => $profile?->current_state ?? '',
                'nationality' => $profile?->nationality ?? 'French',
                'age' => $profile?->age ?? 24,
                'spoken_languages' => $profile?->spoken_languages ?? ['fr', 'en'],
                'travel_companions' => $profile?->travel_companions?->value ?? 'alone',
                'visa_id' => $project?->visa_id ?? ($visas->first()?->id ?? null),
                'custom_visa_name' => $project?->custom_visa_name ?? '',
                'primary_goal' => $project?->primary_goal ?? 'work_travel',
                'selected_needs' => $project?->selected_needs ?? ['housing', 'vehicle', 'admin_support', 'community'],
                'target_arrival_date' => $profile?->target_arrival_date ? $profile->target_arrival_date->format('Y-m-d') : now()->addDays(45)->format('Y-m-d'),
                'arrival_city' => $profile?->arrival_city ?? 'Sydney',
                'target_settlement_city' => $profile?->target_settlement_city ?? 'Sydney',
                'planned_duration_months' => $profile?->planned_duration_months ?? 12,
                'bio' => $profile?->bio ?? '',
                'interests' => $profile?->interests ?? ['road_trips', 'surfing', 'hiking'],
                'onboarding_completed' => (bool) $profile?->onboarding_completed_at,
            ],
        ]);
    }

    /**
     * Save Step 1: Geographic Situation & Identity.
     */
    public function saveStep1(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'location_type' => 'required|string|in:outside_australia,already_in_australia',
            'current_country' => 'nullable|string|max:100',
            'current_city' => 'nullable|string|max:100',
            'current_state' => 'nullable|string|max:10',
            'nationality' => 'nullable|string|max:100',
            'age' => 'nullable|integer|min:16|max:99',
            'spoken_languages' => 'nullable|array',
            'first_name' => 'nullable|string|max:100',
            'last_name' => 'nullable|string|max:100',
        ]);

        $user = Auth::user();
        if (!$user) {
            $user = User::where('email', 'marie@kangoust.com')->first();
            Auth::login($user);
        }

        if (!empty($validated['first_name']) || !empty($validated['last_name'])) {
            $user->update([
                'first_name' => $validated['first_name'] ?? $user->first_name,
                'last_name' => $validated['last_name'] ?? $user->last_name,
                'name' => trim(($validated['first_name'] ?? $user->first_name) . ' ' . ($validated['last_name'] ?? $user->last_name)),
            ]);
        }

        Profile::updateOrCreate(
            ['user_id' => $user->id],
            [
                'current_location_type' => $validated['location_type'],
                'current_country' => $validated['current_country'] ?? ($validated['location_type'] === 'already_in_australia' ? 'Australia' : 'France'),
                'current_city' => $validated['current_city'],
                'current_state' => $validated['current_state'],
                'nationality' => $validated['nationality'],
                'age' => $validated['age'],
                'spoken_languages' => $validated['spoken_languages'] ?? ['fr', 'en'],
                'onboarding_step' => '2',
            ]
        );

        return redirect()->route('onboarding')->with('success', 'Situation géographique enregistrée avec succès !');
    }

    /**
     * Save Step 2: Project & Visa.
     */
    public function saveStep2(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'visa_id' => 'nullable|exists:visas,id',
            'custom_visa_name' => 'nullable|string|max:150',
            'primary_goal' => 'nullable|string|max:100',
            'travel_companions' => 'nullable|string|in:alone,couple,group,family',
        ]);

        $user = Auth::user();

        UserProject::updateOrCreate(
            ['user_id' => $user->id],
            [
                'visa_id' => $validated['visa_id'] ?? null,
                'custom_visa_name' => $validated['custom_visa_name'] ?? null,
                'primary_goal' => $validated['primary_goal'] ?? 'work_travel',
                'status' => $user->isOutsideAustralia() ? ProjectStatus::PLANNING : ProjectStatus::SETTLED,
            ]
        );

        Profile::updateOrCreate(
            ['user_id' => $user->id],
            [
                'travel_companions' => $validated['travel_companions'] ?? TravelCompanion::ALONE,
                'onboarding_step' => '3',
            ]
        );

        return redirect()->route('onboarding')->with('success', 'Projet et visa enregistrés !');
    }

    /**
     * Save Step 3: Needs, Target Dates & Cities.
     */
    public function saveStep3(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'selected_needs' => 'required|array|min:1',
            'target_arrival_date' => 'nullable|date',
            'arrival_city' => 'nullable|string|max:100',
            'target_settlement_city' => 'nullable|string|max:100',
            'planned_duration_months' => 'nullable|integer|min:1|max:60',
            'bio' => 'nullable|string|max:1000',
            'interests' => 'nullable|array',
        ]);

        $user = Auth::user();

        UserProject::updateOrCreate(
            ['user_id' => $user->id],
            [
                'selected_needs' => $validated['selected_needs'],
            ]
        );

        Profile::updateOrCreate(
            ['user_id' => $user->id],
            [
                'target_arrival_date' => $validated['target_arrival_date'] ?? null,
                'arrival_city' => $validated['arrival_city'] ?? null,
                'target_settlement_city' => $validated['target_settlement_city'] ?? $validated['arrival_city'],
                'planned_duration_months' => $validated['planned_duration_months'] ?? 12,
                'bio' => $validated['bio'] ?? null,
                'interests' => $validated['interests'] ?? [],
                'onboarding_step' => '3',
            ]
        );

        return redirect()->route('onboarding')->with('success', 'Besoins et préférences enregistrés !');
    }

    /**
     * Finalize the onboarding flow and mark as completed.
     */
    public function complete(Request $request): RedirectResponse
    {
        $user = Auth::user();

        if ($user && $user->profile) {
            $user->profile->update([
                'onboarding_completed_at' => now(),
                'onboarding_step' => 'completed',
            ]);

            // Initialize default user journey progress if not already present
            $initialSteps = JourneyStep::where('is_active', true)
                ->where('is_mandatory', true)
                ->orderBy('sort_order')
                ->take(5)
                ->get();

            foreach ($initialSteps as $step) {
                UserJourneyProgress::firstOrCreate(
                    [
                        'user_id' => $user->id,
                        'journey_step_id' => $step->id,
                    ],
                    [
                        'status' => JourneyStepStatus::TODO,
                    ]
                );
            }
        }

        return redirect()->route('onboarding')->with('success', 'Félicitations ! Votre profil Kangoust est prêt.');
    }

    /**
     * Helper to switch demo scenario user (Marie vs Pierre) for testing.
     */
    public function switchDemoUser(Request $request, string $scenario): RedirectResponse
    {
        $email = match ($scenario) {
            'pierre' => 'pierre@kangoust.com',
            'raoul' => 'raoul@kangoust.com',
            default => 'marie@kangoust.com',
        };

        $user = User::where('email', $email)->first();
        if ($user) {
            Auth::login($user);
        }

        return redirect()->route('onboarding')->with('info', "Connecté avec le profil de test : {$user?->full_name}");
    }
}
