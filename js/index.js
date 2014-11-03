function init() {
	setUI();
}

function setUI() {
	setPageUtil('#pgHeader','PageUtil/Header/Header.html');
	setPageUtil('#pgSilder','PageUtil/Silder/Silder.html');
	setPageUtil('#pgLeft','PageUtil/pgLeft/pgLeft.html');
	setPageUtil('#pgSelectBar','PageUtil/SelectBar/SelectBar.html');
	setPageUtil('#pgMain','Page/Index/Index.html');
	setPageUtil('#pgFooter','PageUtil/Footer/Footer.html');
}

function setPageUtil(page_id, page_link) {
	$.get(page_link, function(data) {
		$(page_id).html(data);
	});
}

