<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController
{
    public function __construct(private readonly ProductService $service)
    {
    }

    public function index(): JsonResponse
    {
        return response()->json([
            'data' => $this->service->catalog(),
            'meta' => [
                'source' => 'agronusa-product-service',
                'locale' => 'id-ID',
            ],
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'sku' => ['required', 'string', 'max:64', 'unique:products,sku'],
            'name' => ['required', 'string', 'max:180'],
            'category' => ['required', 'string', 'max:80'],
            'description' => ['required', 'string'],
            'active_ingredient' => ['required', 'string', 'max:180'],
            'dosage' => ['required', 'string', 'max:220'],
            'target_pests' => ['required', 'array', 'min:1'],
            'target_pests.*' => ['required', 'string', 'max:80'],
            'image' => ['required', 'url', 'max:255'],
            'badges' => ['required', 'array', 'min:1'],
            'badges.*' => ['required', 'string', 'max:40'],
            'price' => ['required', 'integer', 'min:0'],
            'stock' => ['required', 'integer', 'min:0'],
            'rating' => ['nullable', 'numeric', 'min:0', 'max:5'],
            'status' => ['nullable', 'in:active,draft,archived'],
        ]);

        return response()->json([
            'data' => $this->service->createProduct($validated),
        ], 201);
    }
}
