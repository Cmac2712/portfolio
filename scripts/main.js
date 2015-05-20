requirejs(['ui', 'slideout'],
	function ( UI, Slideout ) {
	    
	    HTMLCollection.prototype.forEach = function (func) {
	        Array.prototype.forEach.call(this, func); 
	    };

	    var slide = new Slideout({
		'panel': document.getElementById('panel'),
	        'menu': document.getElementById('menu'),
	        'padding': 256,
	        'tolerance': 70
	    });
	    
	    UI.init(slide);
	    
	    /**
	     *  A friendly message
	    */

	console.log("%c Hello, thanks for taking the time to look under the hood. If you have any suggestions, criticisms or notice any bugs please email me at %ccmac2712@gmail.com", "color: #444; font-weight: bold;", "text-decoration: underline; font-weight: bold; color: #66e;")
	});
    
