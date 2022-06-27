<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package omnispace_sitara
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>

	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
<link rel='stylesheet' id='wp-block-library-css'  href='https://www.barefootcollege.org/wp-includes/css/dist/block-library/style.min.css?ver=5.7.2' type='text/css' media='all' />
<link rel='stylesheet' id='contact-form-7-css'  href='https://www.barefootcollege.org/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='google-font-roboto-css'  href='https://fonts.googleapis.com/css?family=Roboto' type='text/css' media='all' />
<link rel='stylesheet' id='stripe-checkout-button-css'  href='https://checkout.stripe.com/v3/checkout/button.css' type='text/css' media='all' />
<link rel='stylesheet' id='simpay-public-css'  href='https://www.barefootcollege.org/wp-content/plugins/wp-simple-pay-pro-3/assets/css/public.min.css?ver=3.6.0' type='text/css' media='all' />
<link rel='stylesheet' id='simpay-jquery-ui-cupertino-css'  href='https://www.barefootcollege.org/wp-content/plugins/wp-simple-pay-pro-3/assets/css/jquery-ui-cupertino.min.css?ver=3.6.0' type='text/css' media='all' />
<link rel='stylesheet' id='simpay-public-pro-css'  href='https://www.barefootcollege.org/wp-content/plugins/wp-simple-pay-pro-3/assets/css/public-pro.min.css?ver=3.6.0' type='text/css' media='all' />
<link rel='stylesheet' id='barefoot-style-css'  href='https://www.barefootcollege.org/wp-content/themes/barefoot/style.css?v=1626701032&#038;ver=5.7.2' type='text/css' media='all' />
<link rel='stylesheet' id='barefoot-styles-css'  href='https://www.barefootcollege.org/wp-content/themes/barefoot/stylesheets/styles.css?ver=5.7.2' type='text/css' media='all' />
<link rel='stylesheet' id='cff-css'  href='https://www.barefootcollege.org/wp-content/plugins/custom-facebook-feed/assets/css/cff-style.css?ver=2.19.1' type='text/css' media='all' />
<link rel='stylesheet' id='sb-font-awesome-css'  href='https://www.barefootcollege.org/wp-content/plugins/custom-facebook-feed/assets/css/font-awesome.min.css?ver=4.7.0' type='text/css' media='all' />
<link rel='stylesheet' id='cookie-notice-front-css'  href='https://www.barefootcollege.org/wp-content/plugins/cookie-notice/includes/../css/front.min.css?ver=5.7.2' type='text/css' media='all' />
<link rel='stylesheet' id='rrssb-css-css'  href='https://www.barefootcollege.org/wp-content/plugins/rrssb//rrssb.css' type='text/css' media='all' />
<link rel='stylesheet' id='animate-css'  href='https://www.barefootcollege.org/wp-content/plugins/bbpowerpack/assets/css/animate.min.css?ver=3.5.1' type='text/css' media='all' />
<link rel="https://api.w.org/" href="https://www.barefootcollege.org/wp-json/" /><link rel="alternate" type="application/json" href="https://www.barefootcollege.org/wp-json/wp/v2/pages/15056" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.barefootcollege.org/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.barefootcollege.org/wp-includes/wlwmanifest.xml" /> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<header id="masthead" class="site-header">
			<div class="o_header_container">
				<div class="o_logo_container">
					<div class="row">
						<div class="col-lg-2">
							
									<a href="https://sitarasstory.com/"> <img class="o_logo" src="<?php echo get_template_directory_uri(); ?>/images/Sitara-Banner.png" alt="image not found" align="left"></a>
							
						
						</div>
						<div class="o_navigation_menu_container col-lg-8">
							<nav id="site-navigation" class="main-navigation" >
								<?php
								wp_nav_menu(
									array(
										'theme_location' => 'menu-1',
										'menu_id'        => 'primary-menu',
									)
								);
								?>
							</nav>
						</div>
							<div class="col-lg-2">
							<a href="http://sitarasstory.com/donate/"><img class="o-donate-img" src="https://sitarasstory.com/wp-content/uploads/2021/11/Donate-button-1.png"></a>
						</div>
					</div>
				</div>
			</div>
		</header><!-- #masthead -->