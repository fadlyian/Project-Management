<?php

namespace Database\Seeders;

use App\Models\Job;
use App\Models\User;
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
        $users = [1,2,3,4,4,3,2,1];
        $projects= [1,1,1,1,2,2,2,2];
        $jobs = [1,2,3,4,1,2,3,4];

        for($i=0; $i<count($users); $i++){
            DB::table('project_user')->insert([
                'user_id' => $users[$i],
                'project_id' => $projects[$i],
                'job_id' => $jobs[$i]
            ]);
        }
    }
}
