<?php

use App\Http\Controllers\ProductCartController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([], function () {
    Route::get('/products', [ProductController::class,'index']);
    Route::get('/products/{product}', [ProductController::class,'show']);

    Route::get('/cart', [ProductCartController::class,'index']);
    Route::post('/cart', [ProductCartController::class,'store']);
    Route::delete('/cart/{productId}', [ProductCartController::class,'destroy']);
    Route::delete('/cart', [ProductCartController::class,'destroyAll']);
});
