 define(function() {

        /**
         * @desc Our menu button
         */

        var cheeseBurger     = document.getElementsByClassName('nav__button')[0],
            nav              = document.getElementsByTagName('nav')[0],
            navItem          = Array.prototype.slice.call(nav.querySelectorAll('.nav-list a'));

        /**
         * @desc Open/close menu
         */

        function _openClose(e) {
            nav.classList.toggle('open');
            e.preventDefault();
        }

        function _close(e) {
            nav.classList.remove('open');
	    e.preventDefault();
        }

        function bindListeners() { 
	    cheeseBurger.addEventListener('click', _openClose);
            navItem.forEach(function(a) {
                a.addEventListener('click', _close);
            });
        }

        return {
            init: bindListeners
        }

    });
