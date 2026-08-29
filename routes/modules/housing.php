<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/logements', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Logements']))->name('housing.index');
Route::get('/logements/{listing}', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Détail du logement']))->name('housing.show');
Route::get('/publier/logement', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Publier un logement']))->name('housing.create');
