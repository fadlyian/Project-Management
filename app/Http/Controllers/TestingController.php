<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestingController extends Controller
{
    public function index(){
        // return Auth::user()->projects()->get();
        $project = Project::findOrFail(2);
        return $project->users()->get();
        return $project->pivot()->users()->groupBy('user_id')->get();
    }
}
