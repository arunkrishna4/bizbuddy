<?php
require "conn.php";

if ($conn) {
    if (isset($_POST["sub"])) {
        // Sanitize and validate inputs
        $bname = trim($_POST["bname"]);
        $uname = trim($_POST["uname"]);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $pwd = trim($_POST["pwd"]);
        $role = trim($_POST["role"]);

        // Validate email format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            die("Invalid email format");
        }

        // Hash the password
        $hashed_pwd = password_hash($pwd, PASSWORD_DEFAULT);

        // Check for duplicate email
        $email_check = $conn->prepare("SELECT id FROM users WHERE email = ?");
        $email_check->bind_param("s", $email);
        $email_check->execute();
        $email_check_result = $email_check->get_result();

        if ($email_check_result->num_rows > 0) {
            die("Email already exists. Please use a different email.");
        }
        $email_check->close();

        // Prepare SQL statement
        $stmt = $conn->prepare("INSERT INTO users (business_name, username, password, email, role) VALUES (?, ?, ?, ?, ?)");
        if (!$stmt) {
            die("Preparation failed: " . $conn->error);
        }

        $stmt->bind_param("sssss", $bname, $uname, $hashed_pwd, $email, $role);

        // Execute and check for success
        if ($stmt->execute()) {
            echo "Account created successfully!";
            header("Location: login.html"); // Redirect to login page
            exit();
        } else {
            echo "Error executing query: " . $stmt->error; // Use $stmt->error for debugging
        }

        $stmt->close();
    }
} else {
    die("Database connection failed: " . mysqli_connect_error());
}
?>
