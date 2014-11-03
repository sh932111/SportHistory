var initReady = 0;

function init() {
	setUI();
}

function setUI() {
	setPageUtil('#pgHeader','PageUtil/Header/Header.html');
	setPageUtil('#pgSilder','PageUtil/Silder/Silder.html');
	setPageUtil('#pgLeft','PageUtil/pgLeft/pgLeft.html');
	setPageUtil('#pgSelectBar','Page/SelectBar/SelectBar.html');
	setPageUtil('#TitleBar','PageUtil/TitleBar/TitleBar.html');
	setPageUtil('#pgMain','PageUtil/Index/Index.html');
	setPageUtil('#pgFooter','PageUtil/Footer/Footer.html');
}
//等到LeftBar跟SilderBar都loading完，再來Load leftBarInit()
function setPageUtil(page_id, page_link) {
	$.get(page_link, function(data) {
		$(page_id).html(data);
		if (this.url == "PageUtil/pgLeft/pgLeft.html" || this.url == "PageUtil/Silder/Silder.html"){
			initReady ++;
			if (initReady == 2){
				leftBarInit();
			}
		}
	});
}
