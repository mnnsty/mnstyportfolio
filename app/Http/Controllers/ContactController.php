<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Message;
use App\Notifications\SendContactForm;


class ContactController extends Controller{

public function contact()
 {
    return view('contact');
 }

 public function thanks(){
    return view ('thanks');
 }

 public function sendEmail(Request $request)
 {
    $data = $request->validate([
        'name_notif' => 'required|string|max:100',
        'email_notif' => 'required|string|max:100',
        'message_info' => 'required|string|max:100',
    ])  ;

  

\Notification::route('mail','liana@gmail.com')->notify(new SendContactForm($data));
return redirect()->route('thanks');

 }
}

