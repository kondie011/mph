<?php

	include_once "database.php";

    class Config
	{
		public function connect()
		{
			try
			{
				$dns = "mysql:host=".$servername.";dbname=".$dbname.";charset=".$charset;
				$conn = new PDO($dns, $username, $password);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			}
			catch(PDOException $e)
			{
                echo $e->getMessage();
                return (null);
			}
		}
	}

?>