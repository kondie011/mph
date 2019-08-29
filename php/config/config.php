config.php
k

L
S

<?php
	include_once 'Install.class.php';
	include_once "database.php";

	session_start();
	$obj = new Config();
	if (!($conn = $obj->connect()))
	{
		$createDbQuery = "CREATE DATABASE `$dbname`";
		
		try {
			$dbh = new PDO("mysql:host=$servername", $username, $password);
			$dbh->exec($createDbQuery) or die("something went wrong");

			$conn = $obj->connect();
			$conn->exec("CREATE TABLE `feedback`(`email` varchar(50), `comment` VARCHAR(400) not null)");

			$conn->exec("ALTER TABLE `feedback` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin");
			$conn->exec("COMMIT");

		} catch (PDOException $e) {
			die("DB ERROR: ". $e->getMessage());
		}
	}
	
	if(!$conn)
	{
		die("something went wrong".mysqli_connect_error());
	}
?>