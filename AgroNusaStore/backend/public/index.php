<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/';

$products = [
    [
        'sku' => 'OBT-NEEM-500',
        'name' => 'BioNeem Shield 500ml',
        'category' => 'Obat Tani',
        'description' => 'Insektisida nabati untuk wereng, trips, dan kutu daun dengan residu rendah.',
        'price' => 86000,
        'stock' => 342,
        'rating' => 4.9,
    ],
    [
        'sku' => 'PUP-NPK-16',
        'name' => 'NPK Premium Balance 16-16-16',
        'category' => 'Pupuk',
        'description' => 'Nutrisi makro seimbang untuk padi, cabai, jagung, dan hortikultura.',
        'price' => 148000,
        'stock' => 824,
        'rating' => 4.8,
    ],
    [
        'sku' => 'BEN-PADI-01',
        'name' => 'Benih Padi Agronusa IR Pro',
        'category' => 'Benih',
        'description' => 'Benih padi unggul genjah, anakan produktif tinggi, dan tahan rebah.',
        'price' => 72000,
        'stock' => 519,
        'rating' => 4.9,
    ],
];

if ($path === '/' || $path === '/api') {
    echo json_encode(['name' => 'AgroNusa Store Enterprise API', 'status' => 'online'], JSON_PRETTY_PRINT);
    exit;
}

if ($path === '/api/v1/products') {
    echo json_encode(['data' => $products], JSON_PRETTY_PRINT);
    exit;
}

if ($path === '/api/v1/analytics/summary') {
    echo json_encode([
        'data' => [
            'monthly_gmv' => 4800000000,
            'active_distributors' => 312,
            'inventory_accuracy' => 99.2,
            'order_sla_hours' => 22,
            'top_categories' => ['Pupuk', 'Obat Tani', 'Benih'],
        ],
    ], JSON_PRETTY_PRINT);
    exit;
}

http_response_code(404);
echo json_encode(['message' => 'Endpoint tidak ditemukan'], JSON_PRETTY_PRINT);
