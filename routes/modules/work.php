<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/travail', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Travail']))->name('work.index');
Route::get('/travail/{listing}', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Détail de l’offre']))->name('work.show');
Route::get('/publier/travail', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Publier une offre de travail']))->name('work.create');
