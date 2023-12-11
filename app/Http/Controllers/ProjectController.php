<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function myProject(){

        $projects = Auth::user()->projects()->get();

        return response()->json([
            'projects' => $projects,
        ]);
    }

    public function getByUser(string $id)
    {
        return $id;
        return Inertia::render('Project/Project');
    }
}
