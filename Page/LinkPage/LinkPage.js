function LinkInit() {
	var post_data = "";
	callApi(post_data,getAllLinkApi,function(user_data){
		if (user_data.result) {
			var list = user_data.list;
			var LinkPageScrollView = document.getElementById('LinkPageScrollView');
			for (var i = 0; i < list.length; i++) {
				var link = list[i].link;
				var title = list[i].title;
				var link_a = document.createElement("a");
				var br = document.createElement("br");
				link_a.innerHTML = title;
				if (link) {
					link_a.href = link;
				}
				link_a.target = "_blank";
				LinkPageScrollView.appendChild(link_a);
				LinkPageScrollView.appendChild(br);
			}
		}
	}); 
}