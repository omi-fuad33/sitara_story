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
							<div class="row">
								<div class="col-lg-2 o_header_home_icon">
									<i class="fa fa-home"></i>
								</div>
								<div class="col-lg-10">
									<p class="o_header_title">Sitara's Story</p>
									<p class="o_header_sub_title">Into the light</p>
								</div>
							</div>
						</div>
						<div class="o_navigation_menu_container col-lg-10">
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
					</div>
				</div>
			</div>
		</header><!-- #masthead -->