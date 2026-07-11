<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn () => response()->json([
    'name' => 'AgroNusa Store Enterprise API',
    'status' => 'online',
]));
