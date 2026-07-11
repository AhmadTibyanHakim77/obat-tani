<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class AnalyticsController
{
    public function summary(): JsonResponse
    {
        return response()->json([
            'data' => [
                'monthly_gmv' => 4800000000,
                'active_distributors' => 312,
                'inventory_accuracy' => 99.2,
                'order_sla_hours' => 22,
                'top_categories' => ['Pupuk', 'Obat Tani', 'Benih'],
            ],
        ]);
    }
}
