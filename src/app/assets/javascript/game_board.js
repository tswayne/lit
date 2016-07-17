(function($) {
	//react do this, then set a state to isExtended, then
	$.ajax({
		url: 'api/map/1',
		type: 'GET',
		dataType: 'json'
	})
		.done(function(map) {
			var elems = {};
			map.territories.forEach(function(territory) {
				elems[territory.id] = territory.svgString;
			});

			$.extend(true, $.fn.mapael,
				{
					maps : {
						game_board: {
							width: 1000,
							height: 1000,
							getCoords: function (lat, lon) {
								var xfactor = 2.752;
								var xoffset = 473.75;
								var x = (lon * xfactor) + xoffset;

								var yfactor = -2.753;
								var yoffset = 231;
								var y = (lat * yfactor) + yoffset;

								return {x: x, y: y};
							},
							'elems': elems
						}
					}
				}
			);
		});
})(jQuery);
