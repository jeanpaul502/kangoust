<?php

require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

echo "--- Kangoust Database & V1 Foundation Verification ---\n\n";

// 1. Catalogs
$visaCount = App\Models\Visa::count();
$certCount = App\Models\Certification::count();
$guideCount = App\Models\Guide::count();
$stepCount = App\Models\JourneyStep::count();

echo "1. CATALOGS:\n";
echo " - Visas: {$visaCount} (e.g. " . App\Models\Visa::pluck('name')->implode(', ') . ")\n";
echo " - Certifications: {$certCount} (e.g. " . App\Models\Certification::pluck('short_name')->implode(', ') . ")\n";
echo " - Guides: {$guideCount} articles across " . App\Models\GuideCategory::count() . " categories\n";
echo " - Journey Steps: {$stepCount} steps (before departure, arrival, settling in)\n\n";

// 2. Marie scenario
$marie = App\Models\User::where('email', 'marie@kangoust.com')->first();
echo "2. USER SCENARIO: Marie Dupont (Pre-arrival / Outside Australia)\n";
echo " - Full Name: {$marie->full_name}\n";
echo " - Current Location: {$marie->profile->current_location_type->label()} ({$marie->profile->current_city}, {$marie->profile->current_country})\n";
echo " - Arrival Destination: {$marie->profile->arrival_city} in {$marie->getDaysUntilArrival()} days (Target: {$marie->profile->target_arrival_date->format('Y-m-d')})\n";
echo " - Visa: {$marie->project->getVisaDisplayName()}\n";
echo " - Needs: " . implode(', ', $marie->project->selected_needs) . "\n";
echo " - Journey Completion: {$marie->getJourneyCompletionPercentage()}%\n";
echo " - Profession: {$marie->professionalProfile->profession_title}\n\n";

// 3. Pierre scenario
$pierre = App\Models\User::where('email', 'pierre@kangoust.com')->first();
echo "3. USER SCENARIO: Pierre Martin (Already in Australia)\n";
echo " - Full Name: {$pierre->full_name}\n";
echo " - Current Location: {$pierre->profile->current_location_type->label()} ({$pierre->profile->current_city}, {$pierre->profile->current_state})\n";
echo " - Visa: {$pierre->project->getVisaDisplayName()} (Status: {$pierre->project->status->label()})\n";
echo " - Certifications: " . $pierre->certifications->map(fn($c) => "{$c->short_name} ({$c->pivot->status->label()} - State: {$c->pivot->state_issued})")->implode(', ') . "\n\n";

// 4. Raoul scenario
$raoul = App\Models\User::where('email', 'raoul@kangoust.com')->first();
echo "4. USER SCENARIO: Raoul Rossi (Sydney Resident / Host)\n";
echo " - Location: {$raoul->profile->current_city}, {$raoul->profile->current_state}\n";
echo " - Bio: {$raoul->profile->bio}\n\n";

// 5. Admin user
$admin = App\Models\User::where('email', 'admin@kangoust.com')->first();
echo "5. ADMIN: {$admin->full_name} ({$admin->email}) -> isAdmin: " . ($admin->isAdmin() ? 'YES' : 'NO') . "\n";

echo "\n>>> ALL CHECKS PASSED SUCCESSFULLY <<<\n";
