<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::get('/dashboard', fn () => Inertia::render('Dashboard/Home/Index'))->name('dashboard');
