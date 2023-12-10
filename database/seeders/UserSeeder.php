<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $people = [
            'ian',
            'anom',
            'fata',
            'aslam',
        ];

        foreach($people as $person){
            User::factory()->create([
                'name' => $person,
                'email' => $person.'@gmail.com',
                'password' => Hash::make('password'),
            ]);
        }
    }
}
