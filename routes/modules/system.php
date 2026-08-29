<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::get('/interdit', fn () => Inertia::render('System/Forbidden')->toResponse(request())->setStatusCode(403))->name('system.forbidden');
Route::fallback(fn () => Inertia::render('System/NotFound')->toResponse(request())->setStatusCode(404));
