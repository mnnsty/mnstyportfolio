<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Thank You</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            background: #f8f9fa;
        }
        .thankyou-box {
            background: #fff;
            padding: 40px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .thankyou-box h1 {
            color: #28a745;
        }
        .thankyou-box a {
            display: inline-block;
            margin-top: 20px;
            text-decoration: none;
            color: white;
            background: #007bff;
            padding: 10px 20px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="thankyou-box">
        <h1>Thank You! 🎉</h1>
        <p>Your submission has been received successfully.</p>
        <a href="{{ url('/') }}">Go Back Home</a>
    </div>
</body>
</html>
