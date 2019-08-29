
<?php 
    sendEmail("www.kondie@live.com", "knedzing@student.wethinkcode.co.za", "plz");
    function sendEmail($to, $msg, $sbj) {
        ini_set( 'display_errors', 1 );
        error_reporting( E_ALL );
        $from = "www.kondie@live.com";
        $header = "From:" . $from;

        mail($to, $sbj, $msg, $header);
    } 
?>