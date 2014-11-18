function leftBarInit(){ 
	var slidersBt = new Array();
	var sliders = new Array();
	var slidersBt2 = new Array();
	var sliders2 = new Array();
	
	var post_data = "year="+getNowYear()+"&month="+(getNowMonth()+1)+"&type="+"學會活動";
	callApi(post_data,getAllNewMsgPathApi,function(user_data){
		var list = user_data.list;
		var slider_rsc = [];
		var slider_rsc2 = [];
		var v = list.length;
		if (v>5) {
			v = 5;
		}
		for (var i = 0; i < v; i++) {
			var path = list[i].path;
			slider_rsc.push(path);
			slider_rsc2.push(path);
		}
		console.log(slider_rsc);
		var sliderBtFrame = document.getElementById('NavBtFrame');
		var sliderImg = document.getElementById('NavDetailImg');
		var sliderBtFrame2 = document.getElementById('NavBtFrame2');
		var sliderImg2 = document.getElementById('NavDetailImg2');
		var bt_off = "navStyle";
		var bt_on = "navSelectedStyle";
		openSlider(slider_rsc ,sliderBtFrame,sliderImg,2500,sliders,slidersBt,bt_off,bt_on);
		openSlider(slider_rsc2 ,sliderBtFrame2,sliderImg2,2500,sliders2,slidersBt2,bt_off,bt_on);
	}); 

	
}