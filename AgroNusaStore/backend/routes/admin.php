<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth:api', 'can:manage-platform'])->prefix('admin')->group(function (): void {
    Route::get('/health', fn () => response()->json(['status' => 'admin-ready']));
});
