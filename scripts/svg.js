define(['helper', 'snap.svg'], function ($$, Snap) {
    
	/*** svgIcon ***/

	function svgIcon( el, config, options ) {
		this.el = el;
		this.options = $$.extend( {}, this.options );
  		$$.extend( this.options, options );
		this.svg = Snap( this.options.size.w, this.options.size.h );
		this.svg.attr( 'viewBox', '0 0 64 64' );
		this.el.appendChild( this.svg.node );
		// state
		this.toggled = false;
		// click event (if mobile use touchstart)
		this.clickevent = $$.mobilecheck() ? 'touchstart' : 'click';
		// icons configuration
		this.config = config[ this.el.getAttribute( 'data-icon-name' ) ];
		// reverse?
		if( $$.hasClass( this.el, 'si-icon-reverse' ) ) {
			this.reverse = true;
		}
		if( !this.config ) return;
		var self = this;
		// load external svg
		Snap.load( this.config.url, function (f) {
			var g = f.select( 'g' );
			self.svg.append( g );
			self.options.onLoad();
			self._initEvents();
			if( self.reverse ) {
				self.toggle();
			}
		});
	}

	svgIcon.prototype.options = {
		speed : 200,
		//easing : mina.linear,
		evtoggle : 'click', // click || mouseover
		size : { w : 64, h : 64 },
		onLoad : function() { return false; },
		onToggle : function() { return false; }
	};

	svgIcon.prototype._initEvents = function() {
		var self = this, toggleFn =  function( ev ) {
				if( ( ( ev.type.toLowerCase() === 'mouseover' || ev.type.toLowerCase() === 'mouseout' ) && $$.isMouseLeaveOrEnter( ev, this ) ) || ev.type.toLowerCase() === self.clickevent ) {
					self.toggle(true);
					self.options.onToggle();	
				}
			};

		if( this.options.evtoggle === 'mouseover' ) {
			this.el.addEventListener( 'mouseover', toggleFn );
			this.el.addEventListener( 'mouseout', toggleFn );
		}
		else {
			this.el.addEventListener( this.clickevent, toggleFn );
		}
	};

	svgIcon.prototype.toggle = function( motion ) {
		if( !this.config.animation ) return;
		var self = this;
		for( var i = 0, len = this.config.animation.length; i < len; ++i ) {
			var a = this.config.animation[ i ],
				el = this.svg.select( a.el ),
				animProp = this.toggled ? a.animProperties.from : a.animProperties.to,
				val = animProp.val, 
				timeout = motion && animProp.delayFactor ? animProp.delayFactor : 0;
			
			if( animProp.before ) {
				el.attr( JSON.parse( animProp.before ) );
			}

			if( motion ) {
				setTimeout(function( el, val, animProp ) { 
					return function() { el.animate( JSON.parse( val ), self.options.speed, self.options.easing, function() {
						if( animProp.after ) {
							this.attr( JSON.parse( animProp.after ) );
						}
						if( animProp.animAfter ) {
							this.animate( JSON.parse( animProp.animAfter ), self.options.speed, self.options.easing );
						}
					} ); }; 
				}( el, val, animProp ), timeout * self.options.speed );
			}
			else {
				el.attr( JSON.parse( val ) );
			}
				
		}
		this.toggled = !this.toggled;
	};

    return svgIcon
});
