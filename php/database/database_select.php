<?php

function selectAllTable($link,$table_name) {
	$action = sprintf("SELECT * FROM `$table_name` ORDER BY CAST(time AS signed) DESC");
	$obj = mysql_query($action, $link);
	return $obj;
}

?>