<?php

namespace App\Http\Controllers;

use App\Models\Job;
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
            'member' => $project->users()->get(),
        ]);
    }

    public function createProject(Request $request)
    {
        $user = Auth::user();
        $job = Job::where('name_job', 'admin')->first();

        $request->validate([
            'name' => 'required'
        ]);

        $project = Project::create([
            'name_project' => $request->name
        ]);

        $project->users()->attach($user->id,[
            'job_id' => $job->job_id,
        ]);

        return response()->json([
            'message' => 'Project berhasil ditambahkan'
        ]);
    }

    public function deleteProject(string $id)
    {
        try {
            $project = Project::findOrFail($id);
            $project->users()->detach();
            $project->delete();

            // $project->jobsInUsers()->detach();

            return response()->json([
                'message' => 'project berhasil dihapus'
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }

    }
}
