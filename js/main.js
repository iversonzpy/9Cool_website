/*
* @Author: zhoupengyang
* @Date:   2018-05-10 09:39:55
* @Last Modified by:   zhoupengyang
* @Last Modified time: 2018-05-11 10:22:22
*/


/*滚动事件
	如果滚轮距顶部高度>0

*/

$(window).scroll(function(){
	headerInit();
});

function headerInit(){
	if($(this).scrollTop()>0){
		$("body").addClass("fixed-header-on");
	}
	else{
		$("body").removeClass("fixed-header-on");
	}
}


/*背景轮播*/

var backimages = ["img/bg-image-1.jpg", "img/bg-image-2.jpg", "img/bg-image-3.jpg"];
$(".index").backstretch(backimages, {
    fade: 750,
    duration: 4000
});
