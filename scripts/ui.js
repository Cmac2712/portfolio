 define(['svg', 'svgConfig', 'helper', 'slideout'], function(svg, svgConfig, $$, Slideout) {
	
        var menuToggle    = document.getElementById('navButtonIcon'),
	    menuItems     = document.getElementById('navList'),
	    headerHeight  = document.getElementById('header').offsetHeight, 
	    menuIcon      = document.getElementById('navButtonIcon'),
	    slideoutPanel = document.getElementById('panel'),
	    menuIconAnimation = new svg(navButtonIcon, svgConfig, {
		size: { w: 32, h: 32 }
	    }),
	    slide = new Slideout({
	    'panel': document.getElementById('panel'),
	    'menu': document.getElementById('menu'),
	    'padding': 256,
	    'tolerance': 70,
	    'touch': false
	});

        /**
	 * @desc Add event listeners to the page
         */

        function bindListeners() { 
	    
	    //Open/close menu
	    menuToggle.addEventListener('click', function () {
		slide.toggle();
	    });

	    menuItems.children.forEach(function (item) {
		item.addEventListener('click', function () {
		    slide.close();
		    menuIconAnimation.toggle();
		});
	    });
	    
	    // Add acitve class to hamburger icon
	    slide.on('beforeopen', function () {
		menuToggle.classList.add('active');
		panel.classList.add('open');
	    }).on('beforeclose', function () {
		menuToggle.classList.remove('active');
		panel.classList.remove('open');
	    });
        }
	
	
	/**
	 * @desc Initiates the menu once javascript is loaded.
	 *	 This prevents the menu from appearing before slideout.js has 
	 *	 had chance to position the menu.
	 */

	function initMenu () {
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
