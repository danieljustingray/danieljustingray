<?php
$conn = new mysqli('localhost', 'root', '', 'school_teams');
if ($conn->connect_error) {
    die('Database connection error: ' . $conn->connect_error);
}
?>
