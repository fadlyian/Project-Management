<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        // Permission::create(["name" => "admin.view"]);
        // Permission::create(["name" => "user.view"]);
        // Permission::create(["name" => "user.edit"]);
        // Permission::create(["name" => "user.delete"]);
        // Permission::create(["name" => "role.view"]);
        // Permission::create(["name" => "role.edit"]);
        // Permission::create(["name" => "role.delete"]);
        // Permission::create(["name" => "permission.view"]);
        // Permission::create(["name" => "permission.edit"]);
        // Permission::create(["name" => "permission.delete"]);

        // Permission::create(['name' => 'board.view']);
        // Permission::create(['name' => 'board.edit']);
        // Permission::create(['name' => 'board.delete']);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'member']);
        // $role1->givePermissionTo('board.view');

        $role2 = Role::create(['name' => 'admin']);
        // $role2->givePermissionTo('permission.view');
        // $role2->givePermissionTo('permission.edit');

        $role3 = Role::create(['name' => 'Super-Admin']);
        // $role3->givePermissionTo(Permission::all());
        // gets all permissions via Gate::before rule; see AuthServiceProvider

        // create demo users
        $user = User::factory()->create([
            'name' => 'User',
            'email' => 'test@gmail.com',
            'password' => Hash::make('password'),
        ]);
        $user->assignRole([$role1, $role2]);

        $user = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
        ]);
        $user->assignRole($role2);

        $user = User::factory()->create([
            'name' => 'Super-Admin User',
            'email' => 'superadmin@gmail.com',
            'password' => Hash::make('password'),
        ]);
        $user->assignRole($role3);
    }
}
