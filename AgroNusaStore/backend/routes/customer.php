<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth:api'])->prefix('customer')->group(function (): void {
    Route::get('/profile', fn () => response()->json(['status' => 'customer-ready']));
});
