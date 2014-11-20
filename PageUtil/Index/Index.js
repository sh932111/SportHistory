
function IndexInit(){
	//InitCheck = 1;
	setPageUtilCallBack('#IndexBox','PageUtil/ListView/ListView.html',function(){
		// var post_data = "year="+reloadYear+"&month="+reloadmonth+"&type="+Key;
		// InitCheck = 0;
		// callApi(post_data,Api,function(user_data){
		// 	reloadData = user_data.list;
			var resTitle = ["2014體育運動學術團體聯合年會暨學術研討會計劃書",
			"2014體育運動學術團體聯合年會暨學術研討會日程表","2014體育運動學術團體聯合年會暨學術研討會交通資訊",
			"2014體育運動學術團體聯合年會暨學術研討會-發表時程表"];
			var resDate = ["2014/11/19","2014/11/19","2014/11/19","2014/11/19"];
			// for (var i = 0; i < reloadData.length; i++) {
		// 		resTitle.push(reloadData[i].title);
		// 		resDate.push(reloadData[i].date);
		// 	}
		// 	listViewInit(resTitle,resDate);
	 //    }); 
		listViewInit(resTitle,resDate);
	});
}
// function test1() {
// 	setPageUtil('#IndexBox','TestPage/Test1/Test1.html');
// }
function IndexInitOtherPage(){
	//InitCheck = 1;
	setPageUtilCallBack('#IndexBox','PageUtil/ListView/ListView.html',function(){
		// var post_data = "year="+reloadYear+"&month="+reloadmonth+"&type="+Key;
		// InitCheck = 0;
		// callApi(post_data,Api,function(user_data){
		// 	reloadData = user_data.list;
			var resTitle = [];
			var resDate = [];
			// for (var i = 0; i < reloadData.length; i++) {
		// 		resTitle.push(reloadData[i].title);
		// 		resDate.push(reloadData[i].date);
		// 	}
		// 	listViewInit(resTitle,resDate);
	 //    }); 
		listViewInit(resTitle,resDate);
		//TitleBarSelectItemsHidden();
	});
}
function IndexInitDataPage(resTitle,resDate){
	setPageUtilCallBack('#IndexBox','PageUtil/ListView/ListView.html',function(){
		listViewInit(resTitle,resDate);
	});
}