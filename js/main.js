'use strict';
//map initalistion
function initMap() {
	var coords, map, marker, content, info, styles;

	styles = [
	{
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#242f3e"
		}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#746855"
		}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
		{
			"color": "#242f3e"
		}
		]
	},
	{
		"featureType": "administrative.locality",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#d59563"
		}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#d59563"
		}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#263c3f"
		}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#6b9a76"
		}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#38414e"
		}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry.stroke",
		"stylers": [
		{
			"color": "#212a37"
		}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#9ca5b3"
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#746855"
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
		{
			"color": "#1f2835"
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#f3d19c"
		}
		]
	},
	{
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#2f3948"
		}
		]
	},
	{
		"featureType": "transit.station",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#d59563"
		}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#17263c"
		}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#515c6d"
		}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.stroke",
		"stylers": [
		{
			"color": "#17263c"
		}
		]
	}
	];

	content = '<h1 class="title">I\'m here</h1>';
	//beetrot academy coords
	coords = {lat: 49.568506, lng: 34.585511};

	map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 16,
			center: coords,
			styles: styles,
			gestureHandling: 'cooperative'
		});

	info = new google.maps.InfoWindow({
		content: content
	});

	marker = new google.maps.Marker({
		position: coords,
		map: map,
		icon: 'images/marker.png',
		//move marker
		draggable: false
	});

	marker.addListener('click', function() {
		info.open(map, marker);
	});
}

(function($){
	$(document).ready(function() {
		// slick slider--------------------------
		$('.autoplay').slick({
            infinite: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            dots: true,
            arrows: false,

        });

        //isotope grid---------------------------
        $('.blocks').isotope({
            itemSelector: '.blocks__img',
            percentPosition: true,
            mosonry:{
                columnWidth: '.sizer'
            }
        });
			
	});
})(jQuery);
