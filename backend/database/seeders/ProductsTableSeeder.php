<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = now();

        $electronicsId = DB::table('categories')->where('slug', 'electronics')->value('id');
        $fashionId = DB::table('categories')->where('slug', 'fashion')->value('id');

        DB::table('products')->insert([
            [
                'name' => 'Vintage Camera',
                'slug' => 'vintage-camera',
                'description' => 'Classic film camera for collectors and enthusiasts.',
                'price' => 12999,
                'image' => '/img/camera.jpg',
                'category_id' => $electronicsId,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Wireless Headphones',
                'slug' => 'wireless-headphones',
                'description' => 'Noise-cancelling over-ear headphones with long battery life.',
                'price' => 8999,
                'image' => '/img/headphones.jpg',
                'category_id' => $electronicsId,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Running Shoes',
                'slug' => 'running-shoes',
                'description' => 'Lightweight running shoes for everyday training.',
                'price' => 5999,
                'image' => '/img/shoes.jpg',
                'category_id' => $fashionId,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
