<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class TestingController extends Controller
{
    public function index(){

        //
        $project = User::find(1)->projects()->get();
        // $project = User::find(1)->jobsInProjects()->get();

        $user = Project::find(2)->users()->get();
        // $user = Project::find(1)->jobsInUsers()->get();

        // return $project;
        return $user;
        foreach($project as $p){
            dump($p);
        }


    }
}
