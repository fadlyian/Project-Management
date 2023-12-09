<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            1,
            1,
        ];

        foreach($users as $user){
            DB::table('project_user')->insert([
                'user_id' => $user,
                'project_id' => 1,
                'role_id' => 1
            ]);
        }
    }
}
