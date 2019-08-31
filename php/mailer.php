<?php 
    $msg = $_POST['msg'];
    $email = $_POST['email'];
    $str = "";
    if ($email == ""){
        $str = $msg;
    }
    else{
        $str = $msg.". Email: ".$email;
    }
    sendEmail("www.kondie@live.com", $str, "Feedback");
    sendEmail("contact@mphservices.co.za", $str, "Feedback");
    
    function sendEmail($to, $msg, $sbj) {
        ini_set('display_errors', 1);
        error_reporting(E_ALL);
        $from = "mph";
        $header = "From:" . $from;

        mail($to, $sbj, $msg, $header);
    } 
?>