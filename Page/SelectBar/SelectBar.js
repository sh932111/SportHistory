function selectedBarInit(){
	var items = ["本會簡介","組織架構","聯絡方式","年度計畫"];
	setSelectedBar(items);
}

function setSelectedBar(items){
	$("#SelectBarBox").empty();
	var box = document.getElementById("SelectBarBox");
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		var item_div = document.createElement("div");
		item_div.innerHTML = item;
		item_div.className = "SelectItem";
		box.appendChild(item_div);
        var line_div = document.createElement("div");
		line_div.className = "SelectLine";
		box.appendChild(line_div);
	}
	var w = items.length * 91 + 1;
	if (w < 598)
	{
		w = 597;
	}
	box.style.width = w + "px";
}