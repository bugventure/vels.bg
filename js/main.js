$(function () {
	//Header image
	var url = "./img/plovdiv" + (Math.floor(Math.random() * 5) + 1) + ".jpg",
		image = $("<img />").on("load", function () {			
			$("header .background")
				.css("backgroundImage", "url(" + url + ")")
				.css("opacity", "1");
		}).attr("src", url);

	//Scroll To
	$(".scroll").click(function (event) {
		event.preventDefault();
		$("html,body").animate({ scrollTop: $(this.hash).offset().top }, 300)
	});

	//GMaps
	window.gmapsapiload = function () {
		var coord = new google.maps.LatLng(42.156486, 24.738295);

		var map = new google.maps.Map(document.getElementById("map-canvas"), {
			center: coord,
			zoom: 15,
			disableDefaultUI: true
		});

		var marker = new google.maps.Marker({
			position: coord,
			map: map,
			icon: './img/marker.png'
		});
	}

	setTimeout(function () {
		$("<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyD6qm4syOispaR9OvJbEStMaJMC3mjNan4&sensor=false&callback=gmapsapiload' type='text/javascript' async='async' />").appendTo("body");
	}, 1000);
});