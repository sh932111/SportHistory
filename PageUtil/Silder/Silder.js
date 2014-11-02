var index;

var sliders = new Array();
var slidersBt = new Array();

function sliderInit(){ 
	
	var slider_rsc = ["img/slider1.jpg","img/slider2.jpg","img/slider3.jpg","img/slider4.jpg","img/slider5.jpg"]
	index = 0;
	var sliderBtFrame = document.getElementById('sliderBtFrame');

	for (var i = 0; i < slider_rsc.length; i++) {
		var img = slider_rsc[i];
		var slider = new Image();
		slider.src = img;
		sliders.push(slider);
		var bt = document.createElement("input");
		setBtStatus(bt,0,i);
		sliderBtFrame.appendChild(bt);
		slidersBt.push(bt);
	}

	var sliderImg = document.getElementById('sliderImg').src = sliders[index].src;
	window.setInterval(change,2500);
}

// function slider

function change(){ 
	index ++;
	if (index > sliders.length - 1)
	{
		index = 0;
	}
	var sliderImg = document.getElementById('sliderImg');

	sliderImg.src = sliders[index].src;

	sliderImg.className = 'slide_ani';
		
	sliderImg.addEventListener("webkitAnimationEnd", function (e)
	{
		sliderImg.className = '';
	});

	for (var i = 0; i < slidersBt.length; i++) {
		var bt = slidersBt[i];
		setBtStatus(bt,index,i);
	}
	
}

function setBtStatus(bt,index,i)
{
	bt.setAttribute("type", "button");
	if (index != i)
	{
		bt.className = "btStyle";
	}
	else
	{
		bt.className = "btSelectedStyle";
	}
}
