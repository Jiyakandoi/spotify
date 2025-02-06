<?php
session_start();
include("../php/config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $result = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");
    $user = mysqli_fetch_assoc($result);

    if ($user && password_verify($password, $user["password"])) {
        $_SESSION["user_id"] = $user["id"];
        echo "<script>alert('Login Successful! Redirecting to Dashboard'); window.location.href='../dashboard.php';</script>";
    } else {
        echo "<script>alert('Invalid login credentials');</script>";
    }
}
?>

