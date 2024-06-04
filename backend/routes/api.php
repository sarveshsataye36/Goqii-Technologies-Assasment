<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\UserController;


// Setup route to create new user
Route::post('/user/new', [UserController::class,'store'])->name('user.store');
