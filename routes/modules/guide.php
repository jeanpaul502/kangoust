<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/guide', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Guide']))->name('guide.index');
Route::get('/guide/assistant', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Assistant Kangoust']))->name('guide.assistant');
Route::get('/guide/etapes/{step}', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Étape du guide']))->name('guide.steps.show');
Route::get('/guide/recommandations/{recommendation}', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Recommandation']))->name('guide.recommendations.show');
