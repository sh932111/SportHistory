<?php

function initDatabase() {
	mysql_query("SET NAMES 'utf8'");
	mysql_query("SET CHARACTER_SET_CLIENT='utf8'");
	mysql_query("SET CHARACTER_SET_RESULTS='utf8'");
	$link = mysql_connect('localhost','root','sh3599033');
	return $link;	
}
function back_space_and_br($str)
{
//將空白還原
	$str=str_replace(" ","&nbsp;","$str");
//將換行還原
	$str=nl2br($str);   //注意!是L不是1
	return $str;
}

?>