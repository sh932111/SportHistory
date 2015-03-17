// var resTitle = ["氫能規劃、厭氧產氫、經濟分析和情報蒐集","協助產業開發先進鍛壓製程與模具設計技術"
// 	,"氫能規劃","厭氧產氫","經濟分析","情報蒐集","協助產業","開發先進","鍛壓製程","模具設計","設計技術"];
// var resDate = ["2014-10-12","2014-10-19"
// 	,"2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19"
// 	,"2014-10-19","2014-10-19"];
	
var getAllNewMsgApi = "php/get_new_msg.php";
var getAllNewMsgPathApi = "php/get_new_msg_path.php";
var getAllMsgApi = "php/get_msg.php";
var getAllPlanApi = "php/get_plan.php";
var getAllBookApi = "php/get_book.php";
var getAllLinkApi = "php/get_link.php";
var getLeafletPath = "../SportServer/php/get_leaflet_path.php";
var getHeadPath = "../SportServer/php/get_head_path.php";
var getFooterPath = "../SportServer/php/get_footer_path.php";
var getDataPath = "../SportServer/php/get_data_path.php";
var getRoot = "php/get_root.php";


function setPageUtil(page_id, page_link) {
	$.get(page_link, function(data) {
		$(page_id).load(page_link);
	});
}
function setPageUtilCallBack(page_id, page_link,callback) {
    $(page_id).load(page_link, function() {
        callback();
    });
}
function setPageUtilCallBackIndex(index,page_id, page_link,callback) {
    $(page_id).load(page_link, function() {
        callback(index);
    });
}
function callApi(post_data,api,callback) {
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", api, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = function() 
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {
        	var return_data = xmlhttp.responseText;
            var get_json = JSON.parse(return_data);
            var user_data = get_json.data;
            callback(user_data);
        }
    }
   	xmlhttp.send(post_data);
}

function getNowMonth() {
    var dt = new Date();
    return dt.getMonth();
}
function getNowYear() {
    var dt = new Date();
    return dt.getFullYear();
}

function refreshListData(api,key,year,month,callback) {
    if (api.length > 0) {
        var post_data = "year="+year+"&month="+month+"&type="+key;
        callApi(post_data,api,function(user_data){
            callback(user_data);
        }); 
    }
}

function getFolderPath(text){
    res = "Msg";
    if (text == "最新消息") {
        res = "Msg";
    }
    else if (text == "學會簡介") {
        res = "Plan";
    }
    else if (text == "活動訊息") {
        res = "Msg";
    }
    else if (text == "出版資訊") {
        res = "Book";
    }
    return res;
}