<?php
    
        // $fname = $_POST['fname'];
        // $lname = $_POST['lname'];
        // $email = $_POST['email'];
        // $phone = $_POST['phone'];
        // $password = $_POST['password'];
        // $confirmPassword = $_POST['confirmPassword'];
        // // $submit = $_POST['submit'];
        // $checkBtn = $_POST['checkBtn'];

        // echo "Response: ".$fname

    if (isset($_POST['fname'])) {
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $password = $_POST['password'];
        $confirmPassword = $_POST['confirmPassword'];

        $conx = mysqli_connect("localhost","root","Root@123",'form')
        $sql = "INSERT INTO `form`.`webform`(`fname`,`lname`,`email`,`phone`,`password`,`confirmPasswordl`)
        VALUES("$fname","$lname","$email","$phone","$password","$confirmPassword");";

        $result = mysqli_query($conx, $sql);

        if ($result == true) {
                echo  "<h3>INSERTED.............!!!!</h3>"
        }
    }

    
?>

