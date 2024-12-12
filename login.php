<?php
require "conn.php";

if (isset($_POST["sub"])) {
    $email = trim($_POST["email"]);
    $password = $_POST["pwd"];

    // Input validation
    if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($password)) {
        // Prepare statement to prevent SQL Injection
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        // Check if user exists
        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();

            // Verify password
            if (password_verify($password, $user['pass']) && $user["role"]==="admin") {
                // Start session and redirect to dashboard
                session_start();
                $_SESSION['user_id'] = $user['id'];
                header("Location: index.html");
                exit();
            }
            else{
                header("location: login.html");
            }
        }
    }
}
?>