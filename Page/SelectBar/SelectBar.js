var Items = [];

function selectedBarInit(){
	var items = getHeaderNewMsg();
	setSelectedBar(items);
}
//設定SelectedBar的內容與UI
function setSelectedBar(items){
	Items = items;
	$("#SelectBarBox").empty();
	var box = document.getElementById("SelectBarBox");
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		var item_div = document.createElement("div");
		item_div.innerHTML = item;
		item_div.value = item;
		item_div.className = "SelectItem";
		item_div.id = i;
		item_div.addEventListener("click", function(e){
			if (BarTitle == "最新消息") {
				if (this.id == 0) {
					setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
						IndexInit();
					});
				}
				else {
					setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
						IndexInitOtherPage();
					});
				}
			}
			else if (BarTitle == "學會簡介") {
				if (this.id == 0) {
					setPageUtil('#pgMain','Page/Information/Information.html');
				}
				else if (this.id == 1) {
					setPageUtil('#pgMain','Page/Architecture/Architecture.html');
				}
				else if (this.id == 2) {
					setPageUtil('#pgMain','Page/CallingPage/CallingPage.html');
				}
				else if (this.id == 3) {
					setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
						var resTitle = ["2014體育運動學術團體聯合年會暨學術研討會計劃書"];
						var resDate = ["2014/11/19"];
						IndexInitDataPage(resTitle,resDate);
					});
				}
			}
			else if (BarTitle == "活動訊息") {

			}
			else if (BarTitle == "出版資訊") {

			}
			else if (BarTitle == "相關連結") {

			}

			// if (HeaderTitle == "學會簡介") {
			// 	if (Items[this.id] == "本會簡介") {
			// 		InitCheck = 1;
			// 		TitleBarSelectItemsHidden();
			// 		setPageUtil('#IndexBox','Page/Information/Information.html');
			// 	}
			// 	else if (Items[this.id] == "組織架構") {
			// 		InitCheck = 1;
			// 		TitleBarSelectItemsHidden();
			// 		setPageUtil('#IndexBox','Page/Architecture/Architecture.html');
			// 	}
			// 	else if (Items[this.id] == "聯絡方式") {
			// 		InitCheck = 1;
			// 		TitleBarSelectItemsHidden();
			// 		setPageUtil('#IndexBox','Page/CallingPage/CallingPage.html');
			// 	}
			// 	else if (Items[this.id] == "年度計畫") {
			// 		TitleBarSelectItemsShow();
			// 		Key = "";
			// 		Api = getAllPlanApi;
			// 		setPageUtil('#IndexBox','PageUtil/index/index.html');
			// 	}
			// }
			// else if (HeaderTitle == "出版資訊") {
			// 	InitCheck = 1;
			// 	Key = Items[this.id];
			// 	Api = getAllBookApi;	
			// 	setPageUtil('#IndexBox','PageUtil/index/index.html');
			// }
			// else if (HeaderTitle == "最新消息") {
			// 	InitCheck = 1;
			// 	if (Items[this.id] == "學會活動") {
			// 		setPageUtil('#IndexBox','TestPage/Test1/Test1.html');
			// 	}
			// 	//Key = Items[this.id];
			// 	//Api = getAllBookApi;	
			// }

			refreshTitleBar(this.id);
        });
		box.appendChild(item_div);
        var line_div = document.createElement("div");
		line_div.className = "SelectLine";
		box.appendChild(line_div);
	}
	//寬度的設定
	var w = items.length * 91 + 1;
	if (w < 598){
		w = 597;
	}
	box.style.width = w + "px";
}
//改變title bar 上的內容
function refreshTitleBar(index){
	if (Items.length > 0 ){
		BarList = Items[index];
		//Key = Items[index];
		setTitleBarTitle(BarTitle,BarList);
	}
	else{
		BarList = "";
		//Key = "";
		setTitleBarTitle2(BarTitle);
	}
}

