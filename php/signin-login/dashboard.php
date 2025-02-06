<?php
session_start();
if (!isset($_SESSION["user_id"])) {
    header("Location: signin-login/log-in.html");
    exit();
}
?>
