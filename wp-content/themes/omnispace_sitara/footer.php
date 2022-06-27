<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package omnispace_sitara
 */

?>
<!-- Sign up section -->
<div class="o_sign_up_conatiner">
    <h3>Be part of the change</h3>
    <p>Sign up to receive stories and updates from Sitara’s Story</p>
    <form class="o_form_container">
        <div class="form-group">
            <div class="row">
                <div class="col-lg-4">
                    <input type="text" class="form-control-text" id="" placeholder="First Name*">
                </div>
                <div class="col-lg-4">
                    <input type="text" class="form-control-text" id="" placeholder="Last Name*">
                </div>
                <div class="col-lg-4">
                    <input type="text" class="form-control-text" id="" placeholder="Email*">
                </div>
            </div>
        </div>
    </form>
</div>
	<footer id="colophon" class="site-footer o_footer_wrapper">
		<div>Spread the word! Help us build a global movement for change: 
		<span><i class="fa fa-facebook-square"></i></span><span><i class="fa fa-twitter-square"></i></span><span><i class="fa fa-youtube-square"></i></span><span><i class="fa fa-linkedin-square"></i></span>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
