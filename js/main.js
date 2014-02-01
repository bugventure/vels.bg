$(function () {
    //Header image
    var bgcount = 2,
        sources = [
            "http://goo.gl/WE5u8K",
            "http://goo.gl/lqmIPI"
        ],
        index = (Math.floor(Math.random() * bgcount) + 1)
	    url = "./img/plovdiv" + index + ".jpg",
		image = $("<img />").on("load", function () {			
		    $("header .background")
				.css("backgroundImage", "url(" + url + ")")
				.css("opacity", "1")
		        .find(".info").text("Photo: " + sources[index - 1]);
		}).attr("src", url);

	//Scroll To
	$(".scroll").click(function (event) {
		event.preventDefault();
		$("html,body").animate({ scrollTop: $(this.hash).offset().top }, 300)
	});

	//GMaps
	window.gmapsapiload = function () {
		var coord = new google.maps.LatLng(42.156486, 24.738295);

		var map = new google.maps.Map(document.getElementById("map"), {
			center: coord,
			zoom: 15,
			disableDefaultUI: true
		});

		var marker = new google.maps.Marker({
			position: coord,
			map: map,
			icon: './img/marker.png',
			url: 'https://maps.google.com/maps?q=ul.+%22Pobeda%22+15,+Plovdiv+4003,+Bulgaria&hl=en&ll=42.156588,24.738421&spn=0.008089,0.016512&sll=42.156699,24.738346&sspn=0.008089,0.016512&hnear=ulitsa+%22Pobeda%22+15,+4003+Plovdiv,+Bulgaria&t=m&z=17&iwloc=A'
		});

		google.maps.event.addListener(marker, 'click', function () {
			document.location.href = this.url;
		});
	}

	if ($.browser.msie && parseInt($.browser.version, 10) <= 7) {
	    alert(opa);
	}
	else {
	    setTimeout(function () {
	        $("<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyD6qm4syOispaR9OvJbEStMaJMC3mjNan4&sensor=false&callback=gmapsapiload' type='text/javascript' async='async' />").appendTo("body");
	    }, 1000);
	}
});