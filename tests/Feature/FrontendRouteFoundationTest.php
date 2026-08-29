<?php

namespace Tests\Feature;

use Tests\TestCase;

class FrontendRouteFoundationTest extends TestCase
{
    public function test_existing_and_shell_routes_are_available(): void
    {
        $routes = [
            '/', '/login', '/register', '/onboarding', '/dashboard', '/annonces',
            '/travail', '/logements', '/vehicules', '/evenements', '/guide',
            '/communaute', '/messages', '/notifications', '/profil', '/parametres',
            '/verification-email', '/verification-email/code',
        ];

        foreach ($routes as $uri) {
            $this->get($uri)->assertSuccessful();
        }

        $this->get('/interdit')->assertForbidden();
    }

    public function test_legacy_urls_redirect_to_their_canonical_destination(): void
    {
        $this->get('/profile')->assertRedirect('/profil');
        $this->get('/settings')->assertRedirect('/parametres');
        $this->get('/verify-email')->assertRedirect('/verification-email');
    }

    public function test_unknown_route_returns_not_found(): void
    {
        $this->get('/inconnue')->assertNotFound();
    }

    public function test_navigation_has_no_hash_destination(): void
    {
        $source = file_get_contents(resource_path('js/data/demo/navigation.js'));

        $this->assertStringNotContainsString("href: '#'", $source);
        $this->assertStringNotContainsString('href: "#"', $source);
    }
}
