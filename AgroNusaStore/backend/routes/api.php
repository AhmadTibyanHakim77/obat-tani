<?php

use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (): void {
    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/analytics/summary', [AnalyticsController::class, 'summary']);
});
