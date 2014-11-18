var BarTitle = "學會簡介";
var BarList = "本會簡介";
var Api = getAllNewMsgApi;
var Key = "學會活動";

function titleBarInit (){
	setInitTitleBarTitle(BarTitle,BarList);
	var month = getNowMonth();
	var TitleBarSelect = document.getElementById('TitleBarSelect');
	var options_array = TitleBarSelect.getElementsByTagName('option')[month];
	options_array.selected = true;
	var year_text_array = [];
	var year_array = [];
	var year = getNowYear();

	var index = year - 2014 + 8;
	for (var i = 0; i < index; i++) {
		var y = year - i;
		year_text_array.push(y+"年");
		year_array.push(y);
	}
	
	var spinner = new getSpinner();
	spinner.loadSpinner(document.getElementById('TitleBarSelectYear'),year_text_array,year_array);
}
//有list 就載入這

function setInitTitleBarTitle(title , list){
	BarTitle = title;
	BarList = list;
	var show = title + " > " + list;
	var bar_title = document.getElementById('BarTitle');
	bar_title.innerHTML = show;
	refreshList();
}

function setTitleBarTitle(title , list){
	BarTitle = title;
	BarList = list;
	var show = title + " > " + list;
	var bar_title = document.getElementById('BarTitle');
	bar_title.innerHTML = show;
	refreshList();
}
//沒list 就載入這
function setTitleBarTitle2(title){
	BarTitle = title;
	BarList = "";
	var bar_title = document.getElementById('BarTitle');
	bar_title.innerHTML = title;
	refreshList();
}

function setIndxeBox(obj) {
	reloadmonth = obj.value;
	refreshList();
}

function setIndxeYearBox(obj) {
	reloadYear = obj.value;
	refreshList();
}

function refreshList() {
	if (InitCheck == 0) {
		refreshListData(Api,Key,reloadYear,reloadmonth,function(user_data){
			reloadData = user_data.list;
			var resTitle = [];
			var resDate = [];
			for (var i = 0; i < reloadData.length; i++) {
				resTitle.push(reloadData[i].title);
				resDate.push(reloadData[i].date);
			}
			listViewInit(resTitle,resDate);
		});
	}
}
