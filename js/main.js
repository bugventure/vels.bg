$(function () {
	//Header image
	var url = "./img/plovdiv" + (Math.floor(Math.random() * 5) + 1) + ".jpg",
		image = $("<img />").on("load", function () {			
			$("#header .background")
				.css("backgroundImage", "url(" + url + ")")
				.css("opacity", "1");
		}).attr("src", url);

	//Scroll To
	$(".scroll").click(function (event) {
		event.preventDefault();
		$("html,body").animate({ scrollTop: $(this.hash).offset().top }, 300)
	});

	//Scroll Spy Refresh
	$('#navbar').scrollspy();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});