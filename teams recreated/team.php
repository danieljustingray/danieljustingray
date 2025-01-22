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
    <title>Team - School Teams</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <h1>Team Chat</h1>
        <a href="dashboard.php">Back to Dashboard</a>
    </header>
    <main>
        <ul id="messageList">
            <!-- Messages will be dynamically loaded here -->
        </ul>
        <input type="text" id="messageInput" placeholder="Type a message">
        <button id="sendButton">Send</button>
    </main>
    <script src="js/chat.js"></script>
</body>
</html>
