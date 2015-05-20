 define(['svg', 'svgConfig', 'helper', 'slideout'], function(svg, svgConfig, $$, Slideout) {

        /**
         * @desc Our menu button
         */
	
        var menuToggle   = document.getElementById('navButtonIcon'),
	    menuItems    = document.getElementById('navList'),
	    headerHeight = document.getElementById('header').offsetHeight, 
	    menuIcon     = document.getElementById('navButtonIcon'),
	    menuIconAnimation = new svg(navButtonIcon, svgConfig, {
		size: { w: 32, h: 32 }
	    }),
	    slide = new Slideout({
	    'panel': document.getElementById('panel'),
	    'menu': document.getElementById('menu'),
	    'padding': 256,
	    'tolerance': 70
	});

        /**
         * @desc Open/close menu
         */

        function bindListeners() { 
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

	function initMenu () {
	    console.log('menu loaded')
	    document.getElementById('menu').style.display = "block";
	}

	function init() {
	    bindListeners();
	    initMenu();
	}

        return {
            init: init 
        }

    });
