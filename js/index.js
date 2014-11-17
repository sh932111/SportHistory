function init() {
	setUI();
}

function setUI() {
	setPageUtil('#pgHeader','PageUtil/Header/Header.html');
	setPageUtilCallBack('#pgLeft','PageUtil/pgLeft/pgLeft.html',function(){
		leftBarInit();
	});
	setPageUtil('#pgSelectBar','Page/SelectBar/SelectBar.html');
	setPageUtil('#TitleBar','PageUtil/TitleBar/TitleBar.html');
	setPageUtil('#pgMain','PageUtil/Index/Index.html');
	setPageUtil('#pgFooter','PageUtil/Footer/Footer.html');
}