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
			if (HeaderTitle == "學會簡介") {
				if (Items[this.id] == "本會簡介") {
					InitCheck = 1;
					TitleBarSelectItemsHidden();
					setPageUtil('#IndexBox','Page/Information/Information.html');
				}
				else if (Items[this.id] == "組織架構") {
					InitCheck = 1;
					TitleBarSelectItemsHidden();
					setPageUtil('#IndexBox','Page/Architecture/Architecture.html');
				}
				else if (Items[this.id] == "聯絡方式") {
					InitCheck = 1;
					TitleBarSelectItemsHidden();
					setPageUtil('#IndexBox','Page/CallingPage/CallingPage.html');
				}
				else if (Items[this.id] == "年度計畫") {
					TitleBarSelectItemsShow();
					Key = "";
					Api = getAllPlanApi;
					setPageUtil('#IndexBox','PageUtil/index/index.html');
				}
			}
			else if (HeaderTitle == "出版資訊") {
				InitCheck = 1;
				Key = Items[this.id];
				Api = getAllBookApi;	
				setPageUtil('#IndexBox','PageUtil/index/index.html');
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
		BarList = Items[index];
		Key = Items[index];
		setTitleBarTitle(BarTitle,BarList);
	}
	else{
		BarList = "";
		Key = "";
		setTitleBarTitle2(BarTitle);
	}
}