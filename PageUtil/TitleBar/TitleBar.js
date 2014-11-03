var BarTitle = "學會簡介";
var BarList = "本會簡介";

function titleBarInit (){
	setTitleBarTitle(BarTitle,BarList);
}
//有list 就載入這
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