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

$post_date;
$post_date2;
if ($month == 0) {
	$post_date = $year."/1/1";
	$post_date2 = $year."/12/31";
}
else {
	$post_date = $year."/".$month."/1";
	$post_date2 = $year."/".$month."/31";
}

$link = initDatabase();

mysql_query("SET NAMES 'utf8'",$link);

if (mysql_select_db('SportData')) {
	$data = array();
	$list = array();
	$i = 0;
	$new_msg_check = true;

	$obj = selectAllTableLeft($link,"newMsgTable");

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

			if ($year != 0 && $new_msg_check && $post_type == $type && date('Y/m/d', strtotime($date)) >= date('Y/m/d', strtotime($post_date)) && date('Y/m/d', strtotime($post_date2)) >= date('Y/m/d', strtotime($date))) {
				$path = "../../SportServer/php/data/Msg/".$data_id;
				$get_img = $path."/*.*";
				$img_path = glob($get_img);

				$finish_path = str_replace ("../../","../",$img_path[0]);
				$data["data_id"] = $data_id;
				$data["title"] = $title;
				$detail_br = str_replace("#"," ",back_space_and_br($detail));
				$data["detail"] = $detail_br;
				$data["date"] = $date;
				$data["time"] = $time;
				$data["link"] = $t_link;
				$data["type"] = $type;
				$data["create_time"] = $create_time;
				$data["img_path"] = $finish_path;

				$list[$i] = $data;
				$i = $i + 1;
				if ($i == 4) {
					$new_msg_check = false;
				}
			}
			else if ($year == 0 && $new_msg_check && $post_type == $type) 
			{
				$path = "../../SportServer/php/data/Msg/".$data_id;
				$get_img = $path."/*.*";
				$img_path = glob($get_img);

				$finish_path = str_replace ("../../","../",$img_path[0]);
				$data["data_id"] = $data_id;
				$data["title"] = $title;
				$detail_br = str_replace("#"," ",back_space_and_br($detail));
				$data["detail"] = $detail_br;
				$data["date"] = $date;
				$data["time"] = $time;
				$data["link"] = $t_link;
				$data["type"] = $type;
				$data["create_time"] = $create_time;
				$data["img_path"] = $finish_path;

				$list[$i] = $data;
				$i = $i + 1;
				if ($i == 4) {
					$new_msg_check = false;
				}
			}
		}
	}

	$data2 = array();
	$list2 = array();
	$i2 = 0;

	for ($z=0; $z < 4; $z++) { 
		$obj2 = selectAllTableLeft2($link,"msgTable",getKey($z));
		if (mysql_num_rows($obj2) != 0) {
			while ($record = mysql_fetch_array($obj2)) 
			{
				$data_id = $record['data_id'];
				$title = $record['title'];
				$detail = $record['detail'];
				$date = $record['date'];
				$time = $record['time'];
				$t_link = $record['link'];
				$type = $record['type'];
				$create_time = $record['create_time'];

				if ($year != 0 && date('Y/m/d', strtotime($date)) >= date('Y/m/d', strtotime($post_date)) && date('Y/m/d', strtotime($post_date2)) >= date('Y/m/d', strtotime($date))) {
					$path = "../../SportServer/php/data/Msg/".$data_id;
					$get_img = $path."/*.*";
					$img_path = glob($get_img);

					$finish_path = str_replace ("../../","../",$img_path[0]);
					$data2["data_id"] = $data_id;
					$data2["title"] = $title;
					$detail_br = str_replace("#"," ",back_space_and_br($detail));
					$data2["detail"] = $detail_br;
					$data2["date"] = $date;
					$data2["time"] = $time;
					$data2["link"] = $t_link;
					$data2["type"] = $type;
					$data2["create_time"] = $create_time;
					$data2["img_path"] = $finish_path;
					$list2[$i2] = $data2;
					$i2++;

					break;
				}
				else if ($year == 0) 
				{
					$path = "../../SportServer/php/data/Msg/".$data_id;
					$get_img = $path."/*.*";
					$img_path = glob($get_img);

					$finish_path = str_replace ("../../","../",$img_path[0]);
					$data2["data_id"] = $data_id;
					$data2["title"] = $title;
					$detail_br = str_replace("#"," ",back_space_and_br($detail));
					$data2["detail"] = $detail_br;
					$data2["date"] = $date;
					$data2["time"] = $time;
					$data2["link"] = $t_link;
					$data2["type"] = $type;
					$data2["create_time"] = $create_time;
					$data2["img_path"] = $finish_path;
					$list2[$i2] = $data2;
					$i2++;

					break;
				}
			}
		}
	}

	$arr["result"]= true;
	$arr["message"]="sucess";
	$arr["list"] = $list;
	$arr["list2"] = $list2;
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

function getKey($index){
	if($index == 0)
		return "社區活動";
	else if($index == 1)
		return "研習活動";
	else if($index == 2)
		return "運動研討會";
	else
		return "學術活動";
}
?>