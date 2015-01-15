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
			BarList = Items[this.id];
		
			if (BarTitle == "最新消息") {
				TitleBarSelectItemsShow();
				document.getElementById('TitleBarSelect').style.display = "none";
				// var options_array = TitleBarSelect.getElementsByTagName('option')[0];
				// options_array.selected = true;
				//console.log(options_array);
				reSetTitleBar();
				setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
					Api = getAllNewMsgApi;
					PostData = "year="+reloadYear+"&month="+reloadmonth+"&type="+BarList;
					IndexInit(Api,PostData);
				});
			}
			else if (BarTitle == "學會簡介") {
				if (this.id == 0) {
					TitleBarSelectItemsHidden();
					setPageUtil('#pgMain','Page/Information/Information.html');
				}
				else if (this.id == 1) {
					TitleBarSelectItemsHidden();
					setPageUtil('#pgMain','Page/Architecture/Architecture.html');
				}
				else if (this.id == 2) {
					TitleBarSelectItemsHidden();
					setPageUtilCallBack('#pgMain','Page/CallingPage/CallingPage.html',function(){
						CallingInit();
					});
				}
				else if (this.id == 3) {
					TitleBarSelectItemsShow();
					setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
						Api = getAllPlanApi;
						reloadmonth = 0;
						reloadYear = 0;
						PostData = "year="+reloadYear+"&month="+reloadmonth;
						document.getElementById('TitleBarSelect').style.display = "none";
						// var options_array = TitleBarSelect.getElementsByTagName('option')[0];
						// options_array.selected = true;
						reSetTitleBar()
						IndexInit(Api,PostData);
					});
				}
			}
			else if (BarTitle == "活動訊息") {
				TitleBarSelectItemsShow();
				document.getElementById('TitleBarSelect').style.display = "none";
				reSetTitleBar()
				setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
					Api = getAllMsgApi;
					PostData = "year="+reloadYear+"&month="+reloadmonth+"&type="+BarList;
					IndexInit(Api,PostData);
				});
			}
			else if (BarTitle == "出版資訊") {
				TitleBarSelectItemsShow();
				document.getElementById('TitleBarSelect').style.display = "none";
				reSetTitleBar();
				setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
					Api = getAllBookApi;
					PostData = "year="+reloadYear+"&month="+reloadmonth+"&type="+BarList;
					IndexInit(Api,PostData);
				});
			}

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
		setTitleBarTitle(BarTitle,BarList);
	}
	else{
		BarList = "";
		//Key = "";
		setTitleBarTitle2(BarTitle);
	}
}

function reSetTitleBar() {
	// var options_array = TitleBarSelect.getElementsByTagName('option');
	// for (var i = 0; i < options_array.length; i++) {
	// 	if (i == 0) {
	// 		options_array[i].selected = true;

	// 	}
	// 	else {
	// 		options_array[i].selected = false;
	// 	}
	// }
	$('#TitleBarSelectYear option[value=0]').attr('selected', 'selected');
	reloadYear = 0;
	reloadmonth = 0;
}