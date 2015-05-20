 define(function() {

        /**
         * @desc Our menu button
         */

        var menuToggle   = document.getElementById('navButton'),
	    menuItems    = document.getElementById('navList'),
	    headerHeight = document.getElementById('header').offsetHeight; 
        /**
         * @desc Open/close menu
         */

        function bindListeners(slide) { 
	    menuToggle.addEventListener('click', function () {
		slide.toggle();	
	    });

	    menuItems.children.forEach(function (item) {
		item.addEventListener('click', function () {
		    slide.close();
		});
	    });
        }

	function () {
	    
	}

	function init(slide) {
	    bindListeners(slide);
	}

        return {
            init: init 
        }

    });
