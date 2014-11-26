
function IndexInit(api,post_data){
	setPageUtilCallBack('#IndexBox','PageUtil/ListView/ListView.html',function(){
		callApi(post_data,api,function(user_data){
			reloadData = user_data.list;
			if (user_data.result) {
				var resTitle = [];
				var resDate = [];
				for (var i = 0; i < reloadData.length; i++) {
					resTitle.push(reloadData[i].title);
					resDate.push(reloadData[i].date);
				}
				listViewInit(resTitle,resDate);
			}
	    }); 
	});
}