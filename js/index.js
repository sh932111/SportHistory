var reloadData;
var reloadYear;
var reloadmonth;

var BarTitle = "最新消息";
var BarList = "學會活動";

var Api;
var PostData;

function init() {
	callApi("",getLeafletPath,function(res){
		if (res.img_path.length > 0) {
			var dialogView = document.getElementById("dialogView");
			dialogView.className = "dialogShow";
			setPageUtilCallBack('#dialogView','Page/leafletDialog/leafletDialog.html',function(){
				leafletDialogInit("../SportServer/php/"+res.img_path[0]);
			});
		}
	});
	
	reloadYear = 0//getNowYear();
	reloadmonth = 0;//(getNowMonth()+1);
	Api = getAllNewMsgApi;
	PostData = "year="+reloadYear+"&month="+reloadmonth+"&type="+"學會活動";
	setUI();
}

function setUI() {
	setPageUtil('#pgHeader','PageUtil/Header/Header.html');
	setPageUtilCallBack('#pgLeft','PageUtil/pgLeft/pgLeft.html',function(){
		leftBarInit();
	});
	setPageUtil('#pgSelectBar','Page/SelectBar/SelectBar.html');
	setPageUtil('#TitleBar','PageUtil/TitleBar/TitleBar.html');
	setPageUtilCallBack('#TitleBar','PageUtil/TitleBar/TitleBar.html',function(){
		document.getElementById('TitleBarSelect').style.display = "none";
	});
	setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
		IndexInit(Api,PostData);
	});
	setPageUtil('#pgFooter','PageUtil/Footer/Footer.html');
}