function leftBarInit(){ 
	var slidersBt = new Array();
	var sliders = new Array();
	var slidersBt2 = new Array();
	var sliders2 = new Array();
	var slider_rsc = ["img/nav1.jpg","img/nav2.jpg","img/nav3.jpg","img/nav5.jpg"];
	var slider_rsc2 = ["img/nav4.jpg","img/nav6.jpg"];
	var sliderBtFrame = document.getElementById('NavBtFrame');
	var sliderImg = document.getElementById('NavDetailImg');
	var sliderBtFrame2 = document.getElementById('NavBtFrame2');
	var sliderImg2 = document.getElementById('NavDetailImg2');
	var bt_off = "navStyle";
	var bt_on = "navSelectedStyle";
	
	openSlider(slider_rsc ,sliderBtFrame,sliderImg,2500,sliders,slidersBt,bt_off,bt_on);
	openSlider(slider_rsc2 ,sliderBtFrame2,sliderImg2,2500,sliders2,slidersBt2,bt_off,bt_on);
}