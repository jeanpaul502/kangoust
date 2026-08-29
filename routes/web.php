<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes — Kangoust
|--------------------------------------------------------------------------
| Toutes les routes de l'application sont définies ici.
| Le rendu des vues est délégué à Inertia.js (React).
|
| Convention de nommage Inertia : 'Module/Page'
| → résolu vers resources/js/screens/{module}/pages/{Page}.jsx
*/

// ── Page d'accueil ────────────────────────────────────────────────────────────
Route::get('/', fn() => Inertia::render('Landing'))->name('landing');

// ── Authentification ──────────────────────────────────────────────────────────
Route::get('/login',    fn() => Inertia::render('Auth/Login'))->name('login');
Route::post('/login',   fn() => back())->name('login.post');
Route::get('/register', fn() => Inertia::render('Auth/Register'))->name('register');
Route::get('/forgot-password', fn() => Inertia::render('Auth/ForgotPassword'))->name('password.request');
Route::get('/reset-password',  fn() => Inertia::render('Auth/ResetPassword'))->name('password.reset');
Route::get('/verify-email',    fn() => Inertia::render('Auth/VerifyEmail'))->name('verification.notice');

// ── Onboarding ────────────────────────────────────────────────────────────────
Route::get('/onboarding', fn() => Inertia::render('Onboarding'))->name('onboarding');

// ── Dashboard ─────────────────────────────────────────────────────────────────
Route::get('/dashboard',  fn() => Inertia::render('Dashboard'))->name('dashboard');

// ── Chargement des modules de routes spécifiques ──────────────────────────────
$moduleRoutes = [
    'onboarding',
    'work', 'housing', 'vehicles', 'events',
    'matching', 'messages', 'guide', 'community'
];

foreach ($moduleRoutes as $module) {
    $path = base_path("routes/modules/{$module}.php");
    if (file_exists($path)) {
        require $path;
    }
}
