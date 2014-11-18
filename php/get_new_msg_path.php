<?php
include "database/database_util.php" ;
include "database/database_select.php" ;

header('Content-Type: text/html; charset=utf8');
mysql_query("SET NAMES 'utf8'");
mysql_query("SET CHARACTER_SET_CLIENT='utf8'");
mysql_query("SET CHARACTER_SET_RESULTS='utf8'");

$year = $_POST["year"];
$month = $_POST["month"];
$post_type = $_POST["type"];
$post_date = $year."/".$month."/1";
$post_date2 = $year."/".$month."/31";
$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);

if (mysql_select_db('SportData')) {
	$data = array();
	$list = array();
	$i = 0;
	$obj = selectAllTable($link,"newMsgTable");

	if (mysql_num_rows($obj) != 0) {
		while ($record = mysql_fetch_array($obj)) 
		{
			$data_id = $record['data_id'];
			$title = $record['title'];
			$detail = $record['detail'];
			$date = $record['date'];
			$time = $record['time'];
			$t_link = $record['link'];
			$type = $record['type'];
			$create_time = $record['create_time'];

			$path = "../../SportService/php/data/Msg/".$data_id."/*.jpg";
			$data_list = glob($path);
			
			$data["data_id"] = $data_id;
			$data["title"] = $title;
			$data["detail"] = $detail;
			$data["date"] = $date;
			$data["time"] = $time;
			$data["link"] = $t_link;
			$data["type"] = $type;
			$data["create_time"] = $create_time;
			$data["path"] = $data_list;
			$list[$i] = $data;

			$i = $i + 1;

		}
	}

	$arr["result"]= true;
	$arr["message"]="sucess";
	$arr["list"] = $list;
	$res["data"] = $arr;

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