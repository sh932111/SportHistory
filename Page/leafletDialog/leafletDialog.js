function leafletDialogInit() {
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
