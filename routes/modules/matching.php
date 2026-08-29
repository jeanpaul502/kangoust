<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/matching', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Matching']))->name('matching.index');
Route::get('/matching/interets', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Intérêts reçus']))->name('matching.interests');
Route::get('/matching/match', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'C’est un match']))->name('matching.matched');
Route::get('/matching/mes-matchs', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Mes matchs']))->name('matching.matches.index');
