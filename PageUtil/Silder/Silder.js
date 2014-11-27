
function sliderInit(){ 

	var slidersBt = new Array();
	var sliders = new Array();
	var slider_rsc = ["img/slider1.jpg","img/slider2.jpg","img/slider3.jpg","img/slider4.jpg","img/slider5.jpg"]
	var sliderBtFrame = document.getElementById("sliderBtFrame");
	var slider_Img = document.getElementById("slider_Img");
	var bt_off = "btStyle";
	var bt_on = "btSelectedStyle";
	openSlider(slider_rsc ,sliderBtFrame,slider_Img,2500,sliders,slidersBt,bt_off,bt_on);
}
//啟動Slider 函數的值：圖片來源(array),要放button的div,要放圖片的img,時間,
//放入圖片的array,放入button的array,css style 關閉,css style 打開
function openSlider(slider_rsc ,sliderBtFrame,sliderImg,time,sliders,slidersBt,bt_off,bt_on){
	var index = 0;
	if (slider_rsc.length > 0) {
		for (var i = 0; i < slider_rsc.length; i++) {
			var img = slider_rsc[i];
			var slider = new Image();
			slider.src = img;
			sliders.push(slider);
			var bt = document.createElement("input");
			setBtStatus(bt,0,i,bt_off,bt_on);
			sliderBtFrame.appendChild(bt);
			slidersBt.push(bt);
		}
		sliderImg.src = sliders[index].src;
		setTimeout(function(){change(index,time,sliders,slidersBt,sliderImg,bt_off,bt_on)},time);
	}
}

function change(index,time,sliders,slidersBt,sliderImg,bt_off,bt_on){ 
	index ++;
	if (index > sliders.length - 1){
		index = 0;
	}
	sliderImg.src = sliders[index].src;

	var check = navigator.userAgent.match("MSIE");
	if (!check){
		sliderImg.className = 'slide_ani';
		PrefixedEvent(sliderImg, "AnimationEnd", listener);
	}
	for (var i = 0; i < slidersBt.length; i++) {
		var bt = slidersBt[i];
		setBtStatus(bt,index,i,bt_off,bt_on);
	}

	setTimeout(function(){change(index,time,sliders,slidersBt,sliderImg,bt_off,bt_on)},time);
}

var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
	for (var p = 0; p < pfx.length; p++) {
		if (!pfx[p]) type = type.toLowerCase();
		element.addEventListener(pfx[p]+type, callback, false);
	}
}

function listener(e) {
	$(this).removeClass('slide_ani');
}

function setBtStatus(bt,index,i,bt_off,bt_on)
{
	bt.setAttribute("type", "button");
	if (index != i){
		bt.className = bt_off;
	}
	else{
		bt.className = bt_on;
	}
}
