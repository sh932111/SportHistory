<?php
include "database/database_util.php" ;
include "database/database_select.php" ;

header('Content-Type: text/html; charset=utf8');
mysql_query("SET NAMES 'utf8'");
mysql_query("SET CHARACTER_SET_CLIENT='utf8'");
mysql_query("SET CHARACTER_SET_RESULTS='utf8'");

$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);

if (mysql_select_db('SportData')) {
	$row = login($link,"rootTable");

	$result = false;
	$message = "登入失敗！";
	if (!empty($row)) {
		$result = true;
	}
	$data = array();
	if ($result) {
		$message = "登入成功！";
		$data["name"] = $row["name"];
		$data["username"] = $row["username"];
		$data["cellphone"] = $row["cellphone"];
		$data["email"] = $row["email"];
	}
	$data["message"] = $message;
	$data["result"] = $result;
	$res["data"] = $data;

	echo json_encode($res);
	mysql_close($link);
	exit();
}

else {
	$data["message"] = "資料庫不存在!";
	$data["result"] = false;
	$res["data"] = $data;
	echo json_encode($res);
	mysql_close($link);
	exit();
}

?>