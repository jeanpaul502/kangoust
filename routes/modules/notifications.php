<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/notifications', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Notifications']))->name('notifications.index');
