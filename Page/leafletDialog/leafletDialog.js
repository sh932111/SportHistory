function leafletDialogInit() {
	var leafletDialogImg = document.getElementById('leafletDialogImg');
	callApi("",getLeafletPath,function(res){
		if (res.img_path.length > 0) {
			leafletDialogImg.src = "../SportServer/php/"+res.img_path[0];
		}
		else {
			dialogCancel();
		}
	});

	var leafletDialogBarBt = document.getElementById('leafletDialogBarBt');
	leafletDialogBarBt.addEventListener("click", function(e){
		dialogCancel();
    });
}
function dialogCancel() {     
	$("#dialogView").empty();
	var dialogView = document.getElementById("dialogView");
	dialogView.className = "dialogHidden";
}
