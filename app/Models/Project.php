<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'projects';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'project_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nameProject'
    ];


    public function users()
    {
        return $this->belongsToMany(User::class, 'project_user', 'project_id', 'user_id',)->withPivot('job_id');
        // Project::find(2)->users()->get();
    }

    public function jobsInUsers()
    {
        return $this->belongsToMany(Job::class, 'project_user', 'project_id', 'job_id')->withPivot('user_id');
        // Project::find(1)->jobsInUsers()->get();
    }

    public function cards()
    {
        return $this->hasMany(Card::class, 'project_id');
    }
}
