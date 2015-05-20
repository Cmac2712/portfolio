requirejs(['ui'],
	function ( UI ) {
	    
	    HTMLCollection.prototype.forEach = function (func) {
	        Array.prototype.forEach.call(this, func); 
	    };
	    
	    UI.init();
	    
	    /**
	     *  A friendly message
	    */

	console.log("%c Hello, thanks for taking the time to look under the hood. If you have any suggestions, criticisms or notice any bugs please email me at %ccmac2712@gmail.com", "color: #444; font-weight: bold;", "text-decoration: underline; font-weight: bold; color: #66e;")
	});
    
