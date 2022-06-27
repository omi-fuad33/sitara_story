<?php
   /*
       Template Name: Get Involved
    */
   ?>
<?php
   get_header();
      ?>
<div class="n_differentfullLegacy">
   <?php
      while ( have_posts() ) : the_post(); 
      $image_id = get_post_thumbnail_id();
      $image_url = wp_get_attachment_image_src($image_id, 'full', true);
      ?>
   <br><br><br><br><br><br><br>
   <!--Home taxt and bottombar -->
   <p class="n_homebar">HOME>
      <?php the_title_attribute(); ?><br>
   </p>
   <!--<hr class=n_hr>-->
   <br>
   <div>
      <?php the_content();?><br>
   </div>
   <div class="n_d">
   <div class="row">
      <div class="col=lg-4"><a href=""><img src="<?php echo get_template_directory_uri(); ?>/images/helper.png" alt="image not found>"></a> </div>
      <div class="col=lg-4"><a href=""><img src="<?php echo get_template_directory_uri(); ?>/images/donor.png" alt="image not found>"></a> </div>
      <div class="col=lg-4"><a href=""><img src="<?php echo get_template_directory_uri(); ?>/images/sponsor.png" alt="image not found>"></a> </div>
   </div></div>
   <?php
      endwhile; //resetting the page loop
      wp_reset_query(); //resetting the page query
      ?>
</div>
<br><br><br>
<div class="n_foot"><?php get_footer();?></div>