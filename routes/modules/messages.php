<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/messages', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Messages']))->name('messages.index');
Route::get('/messages/demandes', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Demandes de conversation']))->name('messages.requests.index');
Route::get('/messages/demandes/{request}', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Demande de conversation']))->name('messages.requests.show');
Route::get('/messages/{conversation}', fn () => Inertia::render('Dashboard/Foundation/ComingSoon', ['title' => 'Conversation']))->name('messages.show');
