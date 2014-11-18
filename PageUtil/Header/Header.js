var HeaderTitle = "最新消息";

function goInformation(){
	TitleBarSelectItemsHidden();
	Api = "";
	Key = "本會簡介";
	var items = getHeaderInformation();
	setSelectedBar(items);
	headerSetTitlebar(2);
	setPageUtil('#IndexBox','Page/Information/Information.html');
}

function goNewMsg(){
	TitleBarSelectItemsShow();
	Api = getAllNewMsgApi;
	Key = "學會活動";
	var items = getHeaderNewMsg();
	setSelectedBar(items);
	headerSetTitlebar(0);
	setPageUtil('#IndexBox','PageUtil/index/index.html');
}
//可能會call api
function goActivity(){
	TitleBarSelectItemsShow();
	Api = getAllMsgApi;
	Key = "社區活動";
	var items = getHeaderActivity();
	setSelectedBar(items);
	headerSetTitlebar(4);
	setPageUtil('#IndexBox','PageUtil/index/index.html');
}

//可能會call api
function goBookInformation(){
	InitCheck = 1;
	TitleBarSelectItemsShow();
	Api = getAllBookApi;
	Key = "學報";
	var items = getHeaderBookInformation();
	setSelectedBar(items);
	headerSetTitlebar(6);
	setPageUtil('#IndexBox','PageUtil/index/index.html');
}

function goLink(){
	TitleBarSelectItemsHidden();
	var items = [];
	setSelectedBar(items);
	var nav_view = document.getElementById('NavView');
	var nav_array = nav_view.getElementsByTagName("div");
	InitCheck = 1;
	HeaderTitle = nav_array[8].getAttribute('value');
	setTitleBarTitle2(nav_array[8].getAttribute('value'));
	setPageUtilCallBack('#IndexBox','Page/LinkPage/LinkPage.html',function(){
		LinkInit();
	});	
}

function headerSetTitlebar(index){
	InitCheck = 1;
	var nav_view = document.getElementById('NavView');
	var selectbox = document.getElementById('SelectBarBox');
	var nav_array = nav_view.getElementsByTagName("div");
	var select_array = selectbox.getElementsByTagName("div");
	var nav_item = nav_array[index];
	HeaderTitle = nav_array[index].getAttribute('value');
	setTitleBarTitle(nav_array[index].getAttribute('value'),select_array[0].value);
}

