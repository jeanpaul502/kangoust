<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/mes-favoris', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Mes favoris']))->name('favorites.index');
