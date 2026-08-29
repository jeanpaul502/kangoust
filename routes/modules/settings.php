<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/parametres', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Paramètres']))->name('settings.index');
Route::get('/parametres/securite', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Sécurité']))->name('settings.security');
Route::get('/parametres/confidentialite', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Confidentialité']))->name('settings.privacy');
Route::get('/parametres/utilisateurs-bloques', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Utilisateurs bloqués']))->name('settings.blocked-users');
Route::get('/parametres/mot-de-passe', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Modifier le mot de passe']))->name('settings.password');
Route::get('/parametres/supprimer-mon-compte', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Supprimer mon compte']))->name('settings.delete-account');
Route::redirect('/settings', '/parametres');
