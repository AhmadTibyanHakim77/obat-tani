<?php

namespace App\DTO;

final readonly class ProductData
{
    public function __construct(
        public string $sku,
        public string $name,
        public string $category,
        public string $description,
        public string $activeIngredient,
        public string $dosage,
        public array $targetPests,
        public string $image,
        public array $badges,
        public int $price,
        public int $stock,
        public float $rating,
        public string $status = 'active',
    ) {
    }

    public static function fromArray(array $payload): self
    {
        return new self(
            sku: (string) $payload['sku'],
            name: (string) $payload['name'],
            category: (string) $payload['category'],
            description: (string) $payload['description'],
            activeIngredient: (string) $payload['active_ingredient'],
            dosage: (string) $payload['dosage'],
            targetPests: (array) $payload['target_pests'],
            image: (string) $payload['image'],
            badges: (array) $payload['badges'],
            price: (int) $payload['price'],
            stock: (int) $payload['stock'],
            rating: (float) ($payload['rating'] ?? 0),
            status: (string) ($payload['status'] ?? 'active'),
        );
    }
}
