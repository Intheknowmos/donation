<?php
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $client_email = $_POST['client_email'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $post_code = $_POST['post_code'];
    $message = $_POST['message'];
    $country = $_POST['country'];


    $conn = new mysqli('localhost', 'root', '', 'kidsinky_test');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into donation(first_name, last_name, client_email, address, post_code, message, country)
            values(?,?,?,?,?,?,?,?)");
        $stmt->bind_param('sssssiss', $first_name, $last_name, $client_email, $address, $city, $post_code, $message, $country);
        $stmt->execute();
        echo "We are expecting your donation. Please share the fundraiser with friends and family";
        $stmt->close();
        $conn->close();
    }
?>