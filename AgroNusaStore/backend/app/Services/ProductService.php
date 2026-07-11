<?php

namespace App\Services;

use App\DTO\ProductData;
use App\Models\Product;
use App\Repositories\ProductRepository;
use Illuminate\Database\Eloquent\Collection;

class ProductService
{
    public function __construct(private readonly ProductRepository $products)
    {
    }

    public function catalog(): Collection
    {
        return $this->products->allActive();
    }

    public function createProduct(array $payload): Product
    {
        return $this->products->create(ProductData::fromArray($payload));
    }
}
