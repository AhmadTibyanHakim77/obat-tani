<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::query()->upsert([
            [
                'sku' => 'OBT-NEEM-500',
                'name' => 'BioNeem Shield 500ml',
                'category' => 'Obat Tani',
                'description' => 'Insektisida nabati untuk wereng, trips, dan kutu daun dengan residu rendah.',
                'active_ingredient' => 'Azadirachtin 0,8% + ekstrak serai wangi',
                'dosage' => '2 ml per liter air, semprot pagi atau sore setiap 5-7 hari.',
                'target_pests' => json_encode(['Wereng', 'Trips', 'Kutu daun', 'Ulat muda']),
                'image' => 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=86',
                'badges' => json_encode(['Organik', 'Best Seller']),
                'price' => 86000,
                'stock' => 342,
                'rating' => 4.9,
                'status' => 'active',
            ],
            [
                'sku' => 'PUP-NPK-16',
                'name' => 'NPK Premium Balance 16-16-16',
                'category' => 'Pupuk',
                'description' => 'Nutrisi makro seimbang untuk padi, cabai, jagung, dan hortikultura.',
                'active_ingredient' => 'Nitrogen 16%, Fosfat 16%, Kalium 16%',
                'dosage' => '150-250 kg per hektare sesuai rekomendasi tanah.',
                'target_pests' => json_encode(['Defisiensi nitrogen', 'Defisiensi fosfat', 'Defisiensi kalium']),
                'image' => 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=86',
                'badges' => json_encode(['Stok Gudang', 'Subsidi Mitra']),
                'price' => 148000,
                'stock' => 824,
                'rating' => 4.8,
                'status' => 'active',
            ],
            [
                'sku' => 'BEN-PADI-01',
                'name' => 'Benih Padi Agronusa IR Pro',
                'category' => 'Benih',
                'description' => 'Benih padi unggul genjah, anakan produktif tinggi, dan tahan rebah.',
                'active_ingredient' => 'Varietas padi unggul bersertifikat',
                'dosage' => '25-30 kg per hektare, rendam dan peram sesuai SOP benih.',
                'target_pests' => json_encode(['Tahan rebah', 'Produktivitas tinggi', 'Umur genjah']),
                'image' => 'https://images.unsplash.com/photo-1530763876460-a7bbf3764dca?auto=format&fit=crop&w=900&q=86',
                'badges' => json_encode(['Panen Cepat', 'Sertifikat']),
                'price' => 72000,
                'stock' => 519,
                'rating' => 4.9,
                'status' => 'active',
            ],
        ], ['sku']);
    }
}
