<?php

namespace App\Http\Controllers;

use App\Models\Project;
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

    public function detailProject(string $id)
    {
        // return Project::findOrFail($id);
        $project = Project::findOrFail($id);
        // return $project->cards()->get();
        // return response()->json($p);

        return Inertia::render('Project/Project',[
            'project' => $project,
            'card' => $project->cards()->get(),
        ]);
    }
}
