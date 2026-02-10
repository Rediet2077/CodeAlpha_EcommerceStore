<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = now();

        DB::table('categories')->insert([
            ['name' => 'Electronics', 'slug' => 'electronics', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Fashion', 'slug' => 'fashion', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Sports', 'slug' => 'sports', 'created_at' => $now, 'updated_at' => $now],
        ]);
    }
}
