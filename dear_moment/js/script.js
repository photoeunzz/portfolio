$(function(){
	$(".notice> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
	});
	$(".notice> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});