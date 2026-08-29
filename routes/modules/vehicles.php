<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/vehicules', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Véhicules']))->name('vehicles.index');
Route::get('/vehicules/{listing}', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Détail du véhicule']))->name('vehicles.show');
Route::get('/publier/vehicule', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Publier un véhicule']))->name('vehicles.create');
