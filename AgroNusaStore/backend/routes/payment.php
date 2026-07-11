<?php

use Illuminate\Support\Facades\Route;

Route::prefix('payments')->group(function (): void {
    Route::get('/methods', fn () => response()->json(['data' => ['bank_transfer', 'virtual_account', 'cod_distributor']]));
});
