function leafletDialogInit(img) {
	var leafletDialogImg = document.getElementById('leafletDialogImg');
	leafletDialogImg.src = img;
	
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
