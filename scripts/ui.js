 define(['svg', 'svgConfig', 'helper'], function(svg, svgConfig, $$) {

        /**
         * @desc Our menu button
         */
	
        var menuToggle   = document.getElementById('navButtonIcon'),
	    menuItems    = document.getElementById('navList'),
	    headerHeight = document.getElementById('header').offsetHeight, 
	    menuIcon     = document.getElementById('navButtonIcon'),
	    menuIconAnimation = new svg(navButtonIcon, svgConfig, {
		size: { w: 32, h: 32 }
	    });



        /**
         * @desc Open/close menu
         */

        function bindListeners(slide) { 
	    menuToggle.addEventListener('click', function () {
		this.classList.toggle('active');
		slide.toggle();	
	    });

	    menuItems.children.forEach(function (item) {
		item.addEventListener('click', function () {
		    slide.close();
		});
	    });
        }

	function init(slide) {
	    bindListeners(slide);
	}

        return {
            init: init 
        }

    });
