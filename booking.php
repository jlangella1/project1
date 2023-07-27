<?php
$servername = "localhost"; // Replace with your server name
$username = "your_username"; // Replace with your MySQL username
$password = "your_password"; // Replace with your MySQL password
$dbname = "your_database"; // Replace with your database name

// Create a new MySQLi instance
$mysqli = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

echo "Connected successfully";

// Perform your database operations here

// Close the connection
$mysqli->close();
?>
