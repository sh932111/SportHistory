<?php

function selectAllTable($link,$table_name) {
	$action = sprintf("SELECT * FROM `$table_name` ORDER BY date DESC");
	$obj = mysql_query($action, $link);
	return $obj;
}

function selectAllNotDESCTable($link,$table_name) {
	$action = sprintf("SELECT * FROM `$table_name`");
	$obj = mysql_query($action, $link);
	return $obj;
}

function selectAllTableLeft($link,$table_name) {
	$action = sprintf("SELECT * FROM `$table_name` WHERE image = '1' ORDER BY date DESC");
	$obj = mysql_query($action, $link);
	return $obj;
}
?>