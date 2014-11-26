function ShowDetailDataInit(index) {
	var post_data = "folder="+getFolderPath(BarTitle)+"&data_id="+reloadData[index].data_id;
	callApi(post_data,getDataPath,function(res){
		if (res.img_path.length > 0) {
			var ShowDetailDataLeafletImg = document.getElementById("ShowDetailDataLeafletImg");
			ShowDetailDataLeafletImg.src = "../SportServer/php/"+res.img_path[0];
			
			var ShowDetailDataLeafletImgBtView = document.getElementById("ShowDetailDataLeafletImgBtView");
			ShowDetailDataLeafletImgBtView.addEventListener("click", function(e){
				console.log("ss");
				showDetailDataBigImg("../SportServer/php/"+res.img_path[0]);
			});
		}
		var replace_file_path = res.replace_file_path;
		var replace_img_path = res.replace_img_path;

		var img_array = [];
		var link_array = [];

		var folder_img_path = res.folder_path.img;
		for (var x = 0; x < folder_img_path.length; x++) {
			var link_text = folder_img_path[x].replace(replace_img_path, "");
			var link_url = "../SportServer/php/"+folder_img_path[x];
			var link_data = {
				link_text : link_text,
				link_url : link_url
			};

			img_array.push(link_data);
		}	
		var folder_path = res.folder_path.file;
		for (var x = 0; x < folder_path.length; x++) {

			var link_text = folder_path[x].replace(replace_file_path, "");
			var link_url = "../SportServer/php/"+folder_path[x];
			var link_data = {
				link_text : link_text,
				link_url : link_url
			};
			link_array.push(link_data);
		}

		setPageUtilCallBack('#ShowDetailDataImg','PageUtil/ScrollImgUtil/ScrollImgUtil.html', function() {
			ScrollImgInit(img_array);
		});

		setPageUtilCallBack('#ShowDetailDataLink','PageUtil/ScrollLinkUtil/ScrollLinkUtil.html', function() {
			ScrollLinkInit(link_array);
		});
	});
var ShowDetailDataTitle = document.getElementById("ShowDetailDataTitle");
ShowDetailDataTitle.innerHTML = reloadData[index].title;
if (reloadData[index].detail) {
	var ShowDetailDataDetail = document.getElementById("ShowDetailDataDetail");
	ShowDetailDataDetail.innerHTML = reloadData[index].detail;
}
var ShowDetailDataDate = document.getElementById("ShowDetailDataDate");
ShowDetailDataDate.innerHTML = "活動時間："+reloadData[index].date + " "+ reloadData[index].time;	

}

function showDetailDataBigImg(img){
	var dialogView = document.getElementById("dialogView");
	dialogView.className = "dialogShow";
	setPageUtilCallBack('#dialogView','Page/leafletDialog/leafletDialog.html',function(){
		leafletDialogInit(img);
	});
}
