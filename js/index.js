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
		if (this.url == "PageUtil/ListView/ListView.html"){
			var res_title_items = ["氫能規劃、厭氧產氫、經濟分析和情報蒐集","協助產業開發先進鍛壓製程與模具設計技術"
			,"氫能規劃","厭氧產氫","經濟分析","情報蒐集","協助產業","開發先進","鍛壓製程","模具設計","設計技術"];
			var res_date_items = ["2014-10-12","2014-10-19"
			,"2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19"];
			listViewInit(res_title_items,res_date_items);
		}
	});
}
