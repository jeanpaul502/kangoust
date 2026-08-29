<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/mes-recherches', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Mes recherches']))->name('searches.index');
