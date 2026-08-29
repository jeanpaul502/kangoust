<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/evenements', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Événements']))->name('events.index');
Route::get('/evenements/{event}', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Détail de l’événement']))->name('events.show');
Route::get('/publier/evenement', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Créer un événement']))->name('events.create');
Route::get('/evenements/{event}/participants', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Participants']))->name('events.participants');
Route::get('/evenements/{event}/gestion', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Gestion de l’événement']))->name('events.manage');
