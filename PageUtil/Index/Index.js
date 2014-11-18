
function IndexInit(){
	InitCheck = 1;
	setPageUtilCallBack('#IndexBox','PageUtil/ListView/ListView.html',function(){
		var post_data = "year="+reloadYear+"&month="+reloadmonth+"&type="+Key;
		InitCheck = 0;
		callApi(post_data,Api,function(user_data){
			reloadData = user_data.list;
			var resTitle = [];
			var resDate = [];
			for (var i = 0; i < reloadData.length; i++) {
				resTitle.push(reloadData[i].title);
				resDate.push(reloadData[i].date);
			}
			listViewInit(resTitle,resDate);
	    }); 
	});
}