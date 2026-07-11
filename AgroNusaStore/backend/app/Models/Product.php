<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'sku',
        'name',
        'category',
        'description',
        'active_ingredient',
        'dosage',
        'target_pests',
        'image',
        'badges',
        'price',
        'stock',
        'rating',
        'status',
    ];

    protected $casts = [
        'price' => 'integer',
        'stock' => 'integer',
        'rating' => 'float',
        'target_pests' => 'array',
        'badges' => 'array',
    ];
}
