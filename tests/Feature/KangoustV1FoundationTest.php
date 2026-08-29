<?php

namespace Tests\Feature;

use App\Enums\CertificationStatus;
use App\Enums\JourneyStepStatus;
use App\Enums\LocationType;
use App\Enums\UserRole;
use App\Models\Certification;
use App\Models\Guide;
use App\Models\JourneyStep;
use App\Models\User;
use App\Models\Visa;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class KangoustV1FoundationTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(DatabaseSeeder::class);
    }

    public function test_catalogs_are_properly_seeded(): void
    {
        $this->assertGreaterThanOrEqual(7, Visa::count());
        $this->assertGreaterThanOrEqual(8, Certification::count());
        $this->assertGreaterThanOrEqual(5, Guide::count());
        $this->assertGreaterThanOrEqual(10, JourneyStep::count());
    }

    public function test_marie_profile_before_departure_scenario(): void
    {
        $marie = User::where('email', 'marie@kangoust.com')->first();
        $this->assertNotNull($marie);
        $this->assertTrue($marie->isOutsideAustralia());
        $this->assertFalse($marie->isAlreadyInAustralia());
        $this->assertEquals('Sydney', $marie->profile->arrival_city);
        $this->assertEquals('France', $marie->profile->current_country);

        // Verification of days until arrival countdown
        $daysUntilArrival = $marie->getDaysUntilArrival();
        $this->assertNotNull($daysUntilArrival);
        $this->assertGreaterThan(30, $daysUntilArrival);

        // Verification of Project & Visa
        $this->assertNotNull($marie->project);
        $this->assertEquals('whv_417', $marie->project->visa->code);
        $this->assertContains('housing', $marie->project->selected_needs);

        // Verification of Journey progress
        $completionPct = $marie->getJourneyCompletionPercentage();
        $this->assertGreaterThan(0, $completionPct);
    }

    public function test_pierre_profile_already_in_australia_scenario(): void
    {
        $pierre = User::where('email', 'pierre@kangoust.com')->first();
        $this->assertNotNull($pierre);
        $this->assertTrue($pierre->isAlreadyInAustralia());
        $this->assertEquals('Brisbane', $pierre->profile->current_city);
        $this->assertEquals('QLD', $pierre->profile->current_state);

        // Check Certifications
        $certifications = $pierre->certifications;
        $this->assertCount(2, $certifications);
        $this->assertEquals(CertificationStatus::OBTAINED, $certifications->first()->pivot->status);
    }

    public function test_admin_user_privileges(): void
    {
        $admin = User::where('email', 'admin@kangoust.com')->first();
        $this->assertNotNull($admin);
        $this->assertTrue($admin->isAdmin());
        $this->assertTrue($admin->isModerator());
    }
}
