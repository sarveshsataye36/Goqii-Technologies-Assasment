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
}
