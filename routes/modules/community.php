<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/communaute', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Communauté']))->name('community.index');
Route::get('/communaute/profils/{user}', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Profil public']))->name('community.profiles.show');
