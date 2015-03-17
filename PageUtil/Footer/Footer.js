
function footerInit(){
	callApi("",getFooterPath,function(res){
		if (res.img_path.length > 0) {
			var get_path = "../SportServer/php/"+res.img_path[0];
			$("#FooterImg")[0].src = get_path;
		}
	});
}
