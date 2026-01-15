<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/works', function () {
    return view('works');
})->name('works');

Route::get('/thanks', function () {
    return view('thanks');
})->name('thanks');

Route::get('/contactme', function () {
    return view('contactme');
})->name('contactme');



Route::post('send-email',[ContactController::class,'sendEmail'])
->name('send.email');


