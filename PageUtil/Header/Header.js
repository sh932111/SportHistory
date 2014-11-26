
function goNewMsg(){
	var items = getHeaderNewMsg();
	TitleBarSelectItemsShow();
	setSelectedBar(items);
	headerSetTitlebar(0);
	setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
		reloadmonth = 0;
		PostData = "year="+getNowYear()+"&month="+0+"&type="+"學會活動";
		Api = getAllNewMsgApi;
		IndexInit(Api,PostData);
	});
}

function goInformation(){
	TitleBarSelectItemsHidden();
	var items = getHeaderInformation();
	setSelectedBar(items);
	headerSetTitlebar(2);
	setPageUtil('#pgMain','Page/Information/Information.html');
}

//可能會call api
function goActivity(){
	TitleBarSelectItemsShow();
	var items = getHeaderActivity();
	setSelectedBar(items);
	headerSetTitlebar(4);
	setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
		reloadmonth = 0;
		PostData = "year="+getNowYear()+"&month="+0+"&type="+"社區活動";
		Api = getAllMsgApi;
		IndexInit(Api,PostData);
	});
}

//可能會call api
function goBookInformation(){
	TitleBarSelectItemsShow();
	var items = getHeaderBookInformation();
	setSelectedBar(items);
	headerSetTitlebar(6);
	setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
		reloadmonth = 0;
		PostData = "year="+getNowYear()+"&month="+0+"&type="+"學報";
		Api = getAllBookApi;
		IndexInit(Api,PostData);
	});
}

function goLink(){
	TitleBarSelectItemsHidden();
	titleBarYearReload();
	reloadYear = getNowYear();
	reloadmonth = (getNowMonth()+1);
	var items = [];
	setSelectedBar(items);
	var nav_view = document.getElementById('NavView');
	var nav_array = nav_view.getElementsByTagName("div");
	InitCheck = 1;
	setTitleBarTitle2(nav_array[8].getAttribute('value'));
	setPageUtilCallBack('#pgMain','Page/LinkPage/LinkPage.html',function(){
		LinkInit();
	});	
}

function headerSetTitlebar(index){
	reloadYear = getNowYear();
	titleBarYearReload();
	reloadmonth = (getNowMonth()+1);
	var nav_view = document.getElementById('NavView');
	var selectbox = document.getElementById('SelectBarBox');
	var nav_array = nav_view.getElementsByTagName("div");
	var select_array = selectbox.getElementsByTagName("div");
	var nav_item = nav_array[index];
	setTitleBarTitle(nav_array[index].getAttribute('value'),select_array[0].value);
}

