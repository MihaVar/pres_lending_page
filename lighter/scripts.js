$(document).ready(function() {
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var target = $(this).attr("href");
		var product = $(this).parent().find("h3").text();
        $("#order_form select[name='type'] option[value='"+product+"']").prop("selected", true);
		$("html, body").animate({scrollTop: $(target).offset().top+"px"});
		return false;
	});

	/* timer */

    function update() {
        var Now = new Date(), Finish = new Date();
        Finish.setHours( 23);
        Finish.setMinutes( 59);
        Finish.setSeconds( 59);
        if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
            Finish.setDate( Finish.getDate() + 1);
        }
        var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
        var hrs = Math.floor( sec / 3600);
        sec -= hrs * 3600;
        var min = Math.floor( sec / 60);
        sec -= min * 60;
        $(".timer .hours").html( pad(hrs));
        $(".timer .minutes").html( pad(min));
        $(".timer .seconds").html( pad(sec));
        setTimeout( update, 200);
    }
    function pad(s) {
        s = ("00"+s).substr(-2);
        return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
    }
    update();

});

$(window).on("load", function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoHeight: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		nav: true,
		navText: "",
        dots: false
	});
});