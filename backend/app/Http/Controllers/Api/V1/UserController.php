<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Exceptions;

class UserController extends Controller
{
    use HttpResponses;

    /**
     * Display a listing of the user.
     */
    public function index()
    {
        try
        {   
            // get all user
            $users = User::get();

            // created data send to back to api
            $data = [
                'user' => $users
            ];

            // return response to back to user
            return $this->success(true, $data, 'User retrive successfully', 200);

        }catch(\Throwable $e)
        {
            return $this->fails(false,$e->getMessage(), 500);
        }
    }

    /**
     * Get a single user.
     */
    public function show(String $userId)
    {
        try
        {   
            // Find the user by ID
            $user = User::find($userId);

            if($user){

                // created data send to back to user
                $data = [
                    'user' => $user
                ];

                // return response to back to user
                return $this->success(true, $data, 'User retrive successfully', 200);
            }else{

                // return response to back to user
                return $this->fails(false, 'User not fount', 404);
            }

            

        }catch(\Throwable $e)
        {
            return $this->fails(false,$e->getMessage(), 500);
        }
    }


    /**
     * Create new user and save it into database
     */
    public function store(UserRequest $request)
    {
        try
        {
            // Create new user
            $user = User::create([
                'name'  => $request['name'],
                'email'  => $request['email'],
                'password'  => $request['password'],
                'DOB'  => $request['DOB'],
            ]);

            // created data send to server
            $data = [
                'user' => $user,
            ];

            // return response to back to user if success
            return $this->success(true, $data, 'User created successfully', 200);

        }catch(\Throwable $e)
        {   
            // fail to complete request
            return $this->fails(false, $e->getMessage(), 500);
        }
    }

    /**
     * Update the specified user from database.
     */
    public function update(UserRequest $request,string $userId)
    {
        try
        {   
            // Find the user by ID
            $user = User::find($userId);

            if($user){

                // update user
                $user->update($request->all());

                // created data send to server
                $data = [
                    'user' => $user,
                ];

                // return response to back to user
                return $this->success(true, $data, 'User update successfully', 200);
            }else{

                // return response to back to user
                return $this->fails(false, 'User not found', 404);
            }

            

        }catch(\Throwable $e)
        {
            return $this->fails(false,$e->getMessage(), 500);
        }
    }

    /**
     * Delete the specified user from Database.
     */
    public function destroy(string $userId)
    {
        try
        {   
            // Find the user by ID
            $user = User::find($userId);

            if($user){

                // update user
                $user->delete();

                // created data send to server
                $data = [
                    'user' => $user,
                ];

                // return response to back to user
                return $this->success(true, $data, 'User delete successfully', 200);
            }else{

                // return response to back to user
                return $this->fails(false, 'User not fount', 404);
            }

            

        }catch(\Throwable $e)
        {
            return $this->fails(false,$e->getMessage(), 500);
        }
    }
}
