<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - School Teams</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <h1>Welcome to School Teams</h1>
        <a href="logout.php">Logout</a>
    </header>
    <main>
        <h2>Your Teams</h2>
        <ul>
            <li><a href="team.php?team_id=1">Math Class</a></li>
            <li><a href="team.php?team_id=2">Science Club</a></li>
        </ul>
    </main>
</body>
</html>
