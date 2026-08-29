<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/annonces', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Annonces']))->name('listings.index');
Route::get('/mes-annonces', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Mes annonces']))->name('listings.mine');
Route::get('/publier', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Choisir une publication']))->name('listings.create');
