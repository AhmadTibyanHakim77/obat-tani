<?php

use Illuminate\Support\Facades\Route;

Route::prefix('inventory')->group(function (): void {
    Route::get('/health', fn () => response()->json(['status' => 'inventory-ready']));
});
