var ScrollLinkUtilView = document.getElementById('ScrollLinkUtilView');

function ScrollLinkInit(link_array) {
	for (var i = 0; i < link_array.length; i++) {
		var ScrollLinkUtilViewBox = document.createElement("div");
		ScrollLinkUtilViewBox.className = "ScrollLinkUtilViewBox";
		
		var ScrollLinkUtilViewText = document.createElement("div");
		ScrollLinkUtilViewText.className = "ScrollLinkUtilViewText";

		var a_link = document.createElement("a");
		a_link.innerHTML = link_array[i].link_text;
		if (link_array[i].link_url) {
			a_link.href = link_array[i].link_url;
		}
		a_link.target = "_blank";
		ScrollLinkUtilViewBox.appendChild(a_link);
		ScrollLinkUtilView.appendChild(ScrollLinkUtilViewBox);
	}
}