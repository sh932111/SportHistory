var Items = [];

function selectedBarInit(){
	var items = ["本會簡介","組織架構","聯絡方式","年度計畫"];
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
		item_div.className = "SelectItem";
		item_div.id = i;
		item_div.addEventListener("click", function(e){
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
		setTitleBarTitle(BarTitle,BarList);
	}
	else{
		BarList = "";
		setTitleBarTitle2(BarTitle);
	}
}