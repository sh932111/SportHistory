var resTitle = ["氫能規劃、厭氧產氫、經濟分析和情報蒐集","協助產業開發先進鍛壓製程與模具設計技術"
	,"氫能規劃","厭氧產氫","經濟分析","情報蒐集","協助產業","開發先進","鍛壓製程","模具設計","設計技術"];
var resDate = ["2014-10-12","2014-10-19"
	,"2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19","2014-10-19"
	,"2014-10-19","2014-10-19"];
			
function setPageUtil(page_id, page_link) {
	$.get(page_link, function(data) {
		$(page_id).load(page_link);
	});
}
function setPageUtilCallBack(page_id, page_link,callback) {
    $(page_id).load(page_link, function() {
        callback();
    });
}
