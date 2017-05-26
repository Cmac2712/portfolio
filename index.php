<!doctype html>
<head>
        <title>Craig MacIntyre | Front End Developer</title>
        <meta name="description" content="Front End Developer based in Glasgow, Scotland">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="google-site-verification" content="RNC8hTSfCJ6_uDDHE1dBAQqOmzdWh5RHllgyhx-oEcM" />

        <link rel="stylesheet" href="styles/main.css">

    </head>
    <body>
        <!--[if lt IE 10]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
	<!--<button id="navButton" class="nav__button icon-menu" style="display: none;"></button>-->
	<nav id="menu" style="display: none;">
	    <ul id="navList" class="nav-list">
		<li><a href="#about">About</a></li>
		<li><a href="#skills">Skills</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#experiments">Experiments</a></li>
		<li><a href="#tools">Tools</a></li>
		<li><a href="#contact">Contact</a></li>
	    </ul>
	</nav>

	<main id="panel" class="content">
	<span id="navButtonIcon" class="nav__button" data-icon-name="hamburgerCross"></span>


	    <header id="header" class="text--center posrel"> 
		<div class="wrap posrel">
		    <div class="header--title">
			    <h1 class="flush">Craig MacIntyre</h1>
			    <p>Front End Developer</p>
		    </div>
		</div>
                
		<!--<div class="profile"></div>-->
		
            </header>

            <!-- <article id="about" class="wrap about"> -->
            <!--    <h2 class="underline">About</h2> -->
            <!--    <p>I am a developer passionate about web technology who is always looking for new opportunities and ideas. -->
            <!--     Currently I am working at INDEZ creating cutting-edge ecommerce websites.</p> -->
            <!-- </article> -->

            <section id="skills" class="wrap">
                <h2 class="underline">Skills</h2>
                <div class="grid-container">
                    <div class="column-2">

                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/html5.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>HTML</h3>
                            </div>
                        </div>

                    </div>

                    <div class="column-2">
                    
                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/css3.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                        
                    <div class="column-2">
                    
                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/javascript.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>Javascript</h3>
                            </div>
                        </div>

                    </div>
                        
                    <div class="column-2">
                    
                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/jquery.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>jQuery</h3>
                            </div>
                        </div>

                    </div>
                        
                    <div class="column-2">
                    
                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/git.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>Git</h3>
                            </div>
                        </div>

                    </div>
                        
                    <div class="column-2">
                    
                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/responsive-design.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>Responsive Design</h3>
                            </div>
                        </div>

                    </div>
	      </div>
                               
            </section>

            <!-- <section id="projects" class="wrap"> -->
            <!--     <h2 class="underline">Projects I've Worked On</h2> -->

            <!--     <div class="grid-container"> -->
            <!--         <div class="column-4"> -->
			    <!-- <div class="work__block gdc"> -->
				<!-- <a href="https://glasgowdistillery.com"> -->
				    <!-- <div class="work__image"> -->
					
				    <!-- </div> -->
				    <!-- <div class="work__desc"> -->
				    <!-- <h3>Glasgow Distillery</h3> -->
					<!-- <p>The first new distillery in the city of Glasgow for over 100 years. Home of Makar Gin. -->
					<!-- Glasgow Distillery Company's website utilises responsive design for an equal experience across all devices and platforms.</p> -->
				    <!-- </div> -->
				<!-- </a> -->
			    <!-- </div> -->
            <!--         </div> -->
            <!--         <div class="column-4"> -->
            <!--             <div class="work__block indez"> -->
			  <!-- <a href="http://indez.com"> -->
            <!--                 <div class="work__image"> -->
                                
            <!--                 </div> -->
            <!--                 <div class="work__desc"> -->
            <!--                 <h3>INDEZ</h3> -->
            <!--                     <p>Fully responsive and featuring many interactive components.</p> -->
            <!--                 </div> -->
			  <!-- </a> -->
            <!--             </div> -->
            <!--         </div> -->
            <!--         <div class="column-4"> -->
            <!--             <div class="work__block scc"> -->
			    <!-- <a href="https://github.com/cmac2712/samanthacotoncreative"> -->
            <!--                 <div class="work__image"> -->
                                
            <!--                 </div> -->
            <!--                 <div class="work__desc"> -->
            <!--                 <h3>Samantha Coton Creative</h3> -->
            <!--                     <p>Samantha Coton Creative is an original Wordpress theme I created for a Product Design student's portfolio. </p> -->
            <!--                 </div> -->
			    <!-- </a> -->
            <!--             </div> -->
            <!--         </div> -->
            <!--     </div> -->
            <!-- </section> -->

	    <section id="experiments" class="wrap">
                <h2 class="underline">Experiments</h2>

                <div class="grid-container">

                    <div class="column-4">
			    <div class="work__block wallpaper">
				<a href="https://cmac2712.github.io/wallpaper-finder">
				    <div class="work__image">
					
				    </div>
				    <div class="work__desc">
				    <h3>Wallpaper Finder</h3>
					<p>A very simple app I built with React which uses Reddit.com as a backend.</p>
				    </div>
				</a>
			    </div>
                    </div>

		    <div class="column-4">
			    <div class="work__block notification">
				<a href="https://cmac2712.github.io/notificationjs">
				    <div class="work__image">
					
				    </div>
				    <div class="work__desc">
				    <h3>Notificationjs</h3>
					<p>A simple js library for notifications in the browser.</p>
				    </div>
				</a>
			    </div>
                    </div>

		    <div class="column-4">
			    <div class="work__block animation">
				<a href="https://cmac2712.github.io/configurable-animation">
				    <div class="work__image">
					
				    </div>
				    <div class="work__desc">
				    <h3>Configurable Animation</h3>
					<p>An HTML5 animation that can be altered by the user.</p>
				    </div>
				</a>
			    </div>
                    </div>

                </div>

            </section>
	    <!--
	    <section id="other-sites" class="wrap">
		<h2 class="underline">Other Sites I Have Worked On</h2>
		<div class="grid-container">
		    <div class="column-2">
			    <div class="logo">
				<div class="logo__image">
				    <img src="images/ace.png" alt="">
				</div>
			    </div>
		    </div>

		    <div class="column-2">
			    <div class="logo">
				<div class="logo__image">
				    <img src="images/wd.png" alt="">
				</div>
			    </div>
		    </div>

		    <div class="column-2">
			    <div class="logo">
				<div class="logo__image">
				    <img src="images/yard.png" alt="">
				</div>
			    </div>
		    </div>
		    
		    <div class="column-2">
			    <div class="logo">
				<div class="logo__image">
				    <img src="images/dos.png" alt="">
				</div>
			    </div>
		    </div>
		</div>
	    </section>
	    -->
            <section id="tools" class="wrap">
                <h2 class="underline">Tools I Use</h2>
                <div class="grid-container">
                    <div class="column-2">

                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/chrome.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>Google Chrome</h3>
                            </div>
                        </div>

                    </div>

                    <!-- <div class="column-2"> -->
                    
                    <!--     <div class="logo"> -->
                    <!--         <div class="logo__image"> -->
                    <!--             <img src="images/bower.png" alt=""> -->
                    <!--         </div> -->
                    <!--         <div class="logo__desc"> -->
                    <!--             <h3>Bower</h3> -->
                    <!--         </div> -->
                    <!--     </div> -->
		           
                    <!-- </div> -->
                        
                    <div class="column-2">
                    
                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/git.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>Git</h3>
                            </div>
                        </div>

                    </div>
                        
                    <div class="column-2">
                    
                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/gulp.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>Gulp</h3>
                            </div>
                        </div>

                    </div>
                        
                    <!-- <div class="column-2"> -->
                    
                    <!--     <div class="logo"> -->
                    <!--         <div class="logo__image"> -->
                    <!--             <img src="images/yeoman.png" alt=""> -->
                    <!--         </div> -->
                    <!--         <div class="logo__desc"> -->
                    <!--             <h3>Yo</h3> -->
                    <!--         </div> -->
                    <!--     </div> -->

                    <!-- </div> -->
                        
                    <div class="column-2">
                    
                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/vim.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>Vim</h3>
                            </div>
                        </div>

                    </div>
                
                   <!--  <div class="palm-12 lap-3 desk-2">
                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/ubuntu.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>Ubuntu</h3>
                                <p>Best browser around.</p>
                            </div>

                      div>
                          
                        </div>
             >       </div>
                    <div class="palm-12 lap-3 desk-2">
                        <div class="logo">
                            <div class="logo__image">
                                <img src="images/npm.png" alt="">
                            </div>
                            <div class="logo__desc">
                                <h3>NPM</h3>
                                <p>Best browser around.</p>
              
                            </div>
                        </div>
                    </div> -->
                </div> 
            </section>
            
            <section id="contact" class="wrap contact">
                <h2 class="underline">Contact</h2>
		<ul>
			<li>
			    <span class="icon-local-post-office"></span><a href="mailto: cmac2712@gmail.com">cmac2712@gmail.com</a>
		        </li>
			<li>
			    <span class="icon-github"></span><a href="https://github.com/cmac2712">github.com</a>
			</li>
		</ul>
	    </section>

	    <footer>
		<div class="wrap">
		<p>&copy; Craig MacIntyre <?php echo date('Y'); ?></p>
		</div>
	    </footer>
	</main>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-44206590-1');ga('send','pageview');
        </script>
	<!--
	<script data-main="scripts/main" src="bower_components/requirejs/require.js"></script>
	-->
	<script src="scripts/main-built.js"></script>
</body>
</html>
