function CallingInit() {
	var CallingPageServerRoot = document.getElementById("CallingPageServerRoot");
	callApi("",getRoot,function(res){
		CallingPageServerRoot.innerHTML = "網站管理者："+res.name+" 聯絡電話："+res.cellphone+" 信箱："+res.email+"<br>";
	});
	// body...
}