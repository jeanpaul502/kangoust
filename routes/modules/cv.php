<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/mon-cv', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Mon CV australien']))->name('cv.index');
