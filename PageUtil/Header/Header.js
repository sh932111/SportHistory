function goInformation(){
	var items = ["本會簡介","組織架構","聯絡方式","年度計畫"];
	setSelectedBar(items);
	headerSetTitlebar(0);
}

function goNewMsg(){
	var items = ["學會活動","會訊","優秀論文獎","代發訊息"];
	setSelectedBar(items);
	headerSetTitlebar(2);
}
//可能會call api
function goActivity(){
	var items = ["社區活動","研習活動","運動研討會","學術活動"];
	setSelectedBar(items);
	headerSetTitlebar(4);
}

//可能會call api
function goBookInformation(){
	var items = ["學報","季刊","雙月刊"];
	setSelectedBar(items);
	headerSetTitlebar(6);
}

function goMember(){
	var items = ["會員登入","會員註冊","忘記密碼"];
	setSelectedBar(items);
	headerSetTitlebar(8);
}

function goLink(){
	var items = [];
	setSelectedBar(items);
	var nav_view = document.getElementById('NavView');
	var nav_array = nav_view.getElementsByTagName("div");
	setTitleBarTitle2(nav_array[10].innerText);
}

function headerSetTitlebar(index){
	var nav_view = document.getElementById('NavView');
	var selectbox = document.getElementById('SelectBarBox');
	var nav_array = nav_view.getElementsByTagName("div");
	var select_array = selectbox.getElementsByTagName("div");
	setTitleBarTitle(nav_array[index].innerText,select_array[0].innerText);
}

