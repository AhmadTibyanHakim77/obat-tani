<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table): void {
            $table->id();
            $table->string('sku', 64)->unique();
            $table->string('name', 180);
            $table->string('category', 80)->index();
            $table->text('description');
            $table->string('active_ingredient', 180);
            $table->string('dosage', 220);
            $table->json('target_pests');
            $table->string('image');
            $table->json('badges');
            $table->unsignedBigInteger('price');
            $table->unsignedInteger('stock');
            $table->decimal('rating', 2, 1)->default(0);
            $table->enum('status', ['active', 'draft', 'archived'])->default('active');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
