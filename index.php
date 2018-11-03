<!doctype html>
<head>
	<title>Craig MacIntyre | Web Developer</title>
	<meta name="description" content="Web Developer based in Glasgow, Scotland">
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

	<main id="panel" class="content">

	<header id="header" class="text--center posrel"> 
		<div class="wrap posrel">
			<div class="profile" style="background-image: url(<?php echo 'http://gravatar.com/avatar/'. md5('cmac2712@gmail.com')?>);"></div>
			<div class="header--title">
				<h1 class="flush">Craig MacIntyre</h1>
				<p>Web Developer</p>
			</div>
		</div>
	</header>

	<article id="about" class="wrap about">
		<h2 class="underline">About</h2>
		<p>My name is Craig and I build websites.</p>
	</article>

	<section id="contact" class="wrap contact">
		<h2 class="underline">Contact</h2>
		<ul>
			<li>
				<span class="icon-local-post-office"></span><a href="mailto: craig@craigmacintyre.co.uk">craig@craigmacintyre.co.uk</a>
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
