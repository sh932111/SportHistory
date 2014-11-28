
function leftBarInit(){ 
	var slidersBt = new Array();
	var sliders = new Array();
	var slidersBt2 = new Array();
	var sliders2 = new Array();

	var slider_rsc = [];
	var slider_rsc2 = [];
	var post_data = "year="+getNowYear()+"&month="+0+"&type="+"學會活動";
	callApi(post_data,getAllNewMsgPathApi,function(user_data){
		var list = user_data.list;
		if (list) {
			for (var i = 0; i < list.length; i++) {
				var path = list[i].img_path;
				slider_rsc.push(path);
			}
		}
		var list2 = user_data.list2;
		if (list2) {
			for (var i = 0; i < list2.length; i++) {
				var path = list2[i].img_path;
				slider_rsc2.push(path);
			}
		}
		
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
			reloadData = list;
			TitleBarSelectItemsShow();
			var items = getHeaderNewMsg();
			setSelectedBar(items);
			reloadmonth = 0;
			setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
				var inputs = sliderBtFrame.getElementsByTagName('input');
				for (var i = 0; i < inputs.length; i++) {
					var get_input = inputs[i];
					if($(get_input).hasClass("navSelectedStyle")){
						setTitleBarTitle("最新消息" , "學會活動");
						setPageUtilCallBackIndex(get_input.id,'#IndexBox','Page/ShowDetailData/ShowDetailData.html',function(index){
							ShowDetailDataInit(index);
						});
					}
				}
			});
		});
		var NavDetailImgBox2 = document.getElementById('NavDetailImgBox2');
		NavDetailImgBox2.addEventListener("click", function(e){
			reloadData = list2;
			TitleBarSelectItemsShow();
			var items = getHeaderActivity();
			setSelectedBar(items);
			reloadmonth = 0;
			setPageUtilCallBack('#pgMain','PageUtil/Index/Index.html',function(){
				var inputs = sliderBtFrame2.getElementsByTagName('input');
				for (var i = 0; i < inputs.length; i++) {
					var get_input = inputs[i];
					if($(get_input).hasClass("navSelectedStyle")){
						setTitleBarTitle("活動訊息" , reloadData[get_input.id].type);
						setPageUtilCallBackIndex(get_input.id,'#IndexBox','Page/ShowDetailData/ShowDetailData.html',function(index){
							ShowDetailDataInit(index);
						});
					}
				}
			});
		});
	}); 
}