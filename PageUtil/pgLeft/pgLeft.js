function leftBarInit(){ 
	var slidersBt = new Array();
	var sliders = new Array();
	var slidersBt2 = new Array();
	var sliders2 = new Array();
	
	var post_data = "year="+getNowYear()+"&month="+0+"&type="+"學會活動";
	callApi(post_data,getAllNewMsgPathApi,function(user_data){
		console.log(user_data);
	}); 

	var slider_rsc = ["img/test.jpg"];
	var slider_rsc2 = ["img/test.jpg"];
		
	var sliderBtFrame = document.getElementById('NavBtFrame');
	var sliderImg = document.getElementById('NavDetailImg');
	var sliderBtFrame2 = document.getElementById('NavBtFrame2');
	var sliderImg2 = document.getElementById('NavDetailImg2');
	var bt_off = "navStyle";
	var bt_on = "navSelectedStyle";
	openSlider(slider_rsc ,sliderBtFrame,sliderImg,2500,sliders,slidersBt,bt_off,bt_on);
	openSlider(slider_rsc2 ,sliderBtFrame2,sliderImg2,2500,sliders2,slidersBt2,bt_off,bt_on);
	
	var NavDetailImgBox1 = document.getElementById('NavDetailImgBox1');
	NavDetailImgBox1.addEventListener("click", function(e){

	});
	var NavDetailImgBox2 = document.getElementById('NavDetailImgBox2');
	NavDetailImgBox2.addEventListener("click", function(e){

	});
}