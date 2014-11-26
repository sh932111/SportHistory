

function titleBarInit (){
	setInitTitleBarTitle(BarTitle,BarList);
	
	titleBarYearReload();
	
}
//有list 就載入這

function titleBarYearReload() {
	var month = getNowMonth();
	var TitleBarSelect = document.getElementById('TitleBarSelect');
	var options_array = TitleBarSelect.getElementsByTagName('option')[0];
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

function setInitTitleBarTitle(title , list){
	BarTitle = title;
	BarList = list;
	var show = title + " > " + list;
	var bar_title = document.getElementById('BarTitle');
	bar_title.innerHTML = show;
}

function setTitleBarTitle(title , list){
	BarTitle = title;
	BarList = list;
	var show = title + " > " + list;
	var bar_title = document.getElementById('BarTitle');
	bar_title.innerHTML = show;
}
//沒list 就載入這
function setTitleBarTitle2(title){
	BarTitle = title;
	BarList = "";
	var bar_title = document.getElementById('BarTitle');
	bar_title.innerHTML = title;
}

function setIndxeBox(obj) {
	reloadmonth = obj.value;
	PostData = "year="+reloadYear+"&month="+reloadmonth+"&type="+BarList;
	IndexInit(Api,PostData);
}

function setIndxeYearBox(obj) {
	reloadYear = obj.value;
	PostData = "year="+reloadYear+"&month="+reloadmonth+"&type="+BarList;
	IndexInit(Api,PostData);
}
