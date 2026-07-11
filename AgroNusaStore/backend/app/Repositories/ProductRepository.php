<?php

namespace App\Repositories;

use App\DTO\ProductData;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

class ProductRepository
{
    public function allActive(): Collection
    {
        return Product::query()
            ->where('status', 'active')
            ->orderByDesc('rating')
            ->get();
    }

    public function create(ProductData $data): Product
    {
        return Product::query()->create([
            'sku' => $data->sku,
            'name' => $data->name,
            'category' => $data->category,
            'description' => $data->description,
            'active_ingredient' => $data->activeIngredient,
            'dosage' => $data->dosage,
            'target_pests' => $data->targetPests,
            'image' => $data->image,
            'badges' => $data->badges,
            'price' => $data->price,
            'stock' => $data->stock,
            'rating' => $data->rating,
            'status' => $data->status,
        ]);
    }
}
