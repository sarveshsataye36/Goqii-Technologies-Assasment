<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\UserController;


// Setup route to create new user
Route::post('/user/new', [UserController::class,'store'])->name('user.store');
// Setup route to get all user
Route::get('/user', [UserController::class,'index'])->name('user.index');
// Setup route for update single user
Route::put('/user/update/{id}', [UserController::class,'update'])->name('user.update');
// Delete Route for user setup
Route::delete('/user/delete/{id}', [UserController::class,'destroy'])->name('user.delete');
// Get Single user
Route::get('/user/{id}', [UserController::class,'show'])->name('user.edit'); 
