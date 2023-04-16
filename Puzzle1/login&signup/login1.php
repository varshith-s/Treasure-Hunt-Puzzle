<?php

$email = $_GET['email'];
$password = $_GET['password'];


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_GET['email'];
    $password = $_GET['password'];

    // Connect to database
    $conn = mysqli_connect('localhost','root','','login_details');

    // Query database
    $query = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($connection, $query);

    // Check if user exists
    if (mysqli_num_rows($result) > 0) {
        // Retrieve user information
        $user = mysqli_fetch_assoc($result);
        // Verify password
        if (password_verify($password, $user['password'])) {
            // Start session and redirect to protected page
            session_start();
            $_SESSION['user'] = $user;
            header('Location: protected.php');
            exit();
        } else {
            // Display error message
            echo "Invalid email or password.";
        }
    } else {
        // Display error message
        echo "Invalid email or password.";
    }
}

?>
