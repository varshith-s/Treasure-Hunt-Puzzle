<?php

//Get Heroku ClearDB connection information
/*$cleardb_url      = parse_url(getenv("CLEARDB_DATABASE_URL"));
$cleardb_server   = $cleardb_url["host"];
$cleardb_username = $cleardb_url["user"];
$cleardb_password = $cleardb_url["pass"];
$cleardb_db       = substr($cleardb_url["path"],1);
*/
/*

$active_group = 'default';
$query_builder = TRUE;

// Connect to DB
//$conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
$conn = mysqli_connect('localhost','root','','login_details');

$uname = $_POST['email'];
$pass = $_POST['password'];

//SQL Injection Prevention Code.
$uname=stripcslashes($uname);   
$pass=stripcslashes($pass);
$uname=mysqli_real_escape_string($conn,$uname);
$pass=mysqli_real_escape_string($conn,$pass);

// Am adding this because userdetails are not updating in login database after registration.
$con = mysqli_connect('localhost','root','','registration_details');

$uname1 = $_GET['uname'];
$pass1 = $_GET['pass'];

$uname1=stripcslashes($uname1);   
$pass1=stripcslashes($pass1);
$uname1=mysqli_real_escape_string($con,$uname1);
$pass1=mysqli_real_escape_string($con,$pass1);

if ($conn->connect_error || $con->connect_error ) {
	die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM user_details WHERE username = '$uname' AND password = '$pass'";
$result = mysqli_query($conn, $sql);
$check = mysqli_fetch_array($result);

$sql1 = "SELECT * FROM user_details WHERE username = '$uname' AND password = '$pass'";
$result1 = mysqli_query($con, $sql1);
$check1 = mysqli_fetch_array($result1);

if(isset($check) || isset($check1)){
	echo '<h1>Connection is successful</h1>';
}
else {
	echo '<h1>Connection failed.</h1><p>Wrong user credentials</p>';
}

?>
*/
$email = $_POST['email'];
$password = $_POST['password'];
<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Connect to database
    $connection = mysqli_connect('host', 'username', 'password', 'database');

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




?>