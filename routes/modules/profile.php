<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/profil', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Mon profil']))->name('profile.show');
Route::get('/profil/modifier', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Modifier mon profil']))->name('profile.edit');
Route::redirect('/profile', '/profil');
