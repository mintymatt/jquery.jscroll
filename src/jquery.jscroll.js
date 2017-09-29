$(".jscroll").on("click",function(e){
	var top = 0;
	$(this).attr("data-jscroll-vh")!=null?top=window.innerHeight*Number.parseInt($(this).attr("data-jscroll-vh")):top=$(document).height();
	$(this).attr("data-jscroll-offset")!=null?top+=Number.parseInt($(this).attr("data-jscroll-offset")):0;
	top+=$(this).offset().top-$(window).scrollTop();
	$(this).attr("data-jscroll-up")!=null?top=-top:0;
	console.log(top);
	window.scrollBy({
		top: top, 
		left: 0, 
		behavior: 'smooth' 
	});
	e.preventDefault();

});
