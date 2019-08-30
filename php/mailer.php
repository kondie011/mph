<?php 
    $msg = $_POST['msg'];
    $email = $_POST['email'];
    sendEmail("www.kondie@live.com", $msg + ". Email: " + $email, "Feedback");
    
    function sendEmail($to, $msg, $sbj) {
        ini_set('display_errors', 1);
        error_reporting(E_ALL);
        $from = "mph";
        $header = "From:" . $from;

        mail($to, $sbj, $msg, $header);
        echo "Done.";
    } 
?>