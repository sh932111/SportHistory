function goInformation(){
	var items = getHeaderInformation();
	setSelectedBar(items);
	headerSetTitlebar(0);
	setPageUtil('#IndexBox','PageUtil/ListView/ListView.html');
}

function goNewMsg(){
	var items = getHeaderNewMsg();
	setSelectedBar(items);
	headerSetTitlebar(2);
}
//可能會call api
function goActivity(){
	var items = getHeaderActivity();
	setSelectedBar(items);
	headerSetTitlebar(4);
}

//可能會call api
function goBookInformation(){
	var items = getHeaderBookInformation();
	setSelectedBar(items);
	headerSetTitlebar(6);
}

function goMember(){
	var items = getMember();
	setSelectedBar(items);
	headerSetTitlebar(8);
	setPageUtil('#IndexBox','Page/LoginPage/LoginPage.html');
}

function goLink(){
	var items = [];
	setSelectedBar(items);
	var nav_view = document.getElementById('NavView');
	var nav_array = nav_view.getElementsByTagName("div");
	setTitleBarTitle2(nav_array[10].getAttribute('value'));
}

function headerSetTitlebar(index){
	var nav_view = document.getElementById('NavView');
	var selectbox = document.getElementById('SelectBarBox');
	var nav_array = nav_view.getElementsByTagName("div");
	var select_array = selectbox.getElementsByTagName("div");
	var nav_item = nav_array[index];
	setTitleBarTitle(nav_array[index].getAttribute('value'),select_array[0].value);
}

