<?php
   /*
       Template Name: Our Work
    */
   ?>
<?php
   get_header();
      ?>
<div class="n_differentfullLegacyInner">
   <?php
      while ( have_posts() ) : the_post(); 
      $image_id = get_post_thumbnail_id();
      $image_url = wp_get_attachment_image_src($image_id, 'full', true);
      ?>
   <br><br><br><br><br><br><br>
   <!--Home taxt and bottombar -->
   <!--<p class="n_homebar">HOME>-->
   <!--   <?php the_title_attribute(); ?><br>-->
   <!--</p>-->
   
   <p class="n_InnerHead n_robotoMedium"><?php the_title_attribute(); ?></p>
  
   <br>
   <div class="n_orange"></div>
   <div>
   <div class="row n_cont">
          <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 n_contentFont n_robotoRegular">
        <?php the_content();?>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 n_noIm">
         <img class="n_workImageI" src="<?php echo get_template_directory_uri(); ?>/images/about.JPG" alt="">
        <img class="n_workImageI" src="<?php echo get_template_directory_uri(); ?>/images/work2.JPG" alt="">
        <img class="n_workImageI" src="<?php echo get_template_directory_uri(); ?>/images/partner.jpeg" alt="">
        <img class="n_workImageI" src="<?php echo get_template_directory_uri(); ?>/images/canberra2-min.jpeg" alt="">
        
        <img class="n_workImageI" src="<?php echo get_template_directory_uri(); ?>/images/work.jpeg" alt="">
        <img class="n_workImageI" src="<?php echo get_template_directory_uri(); ?>/images/bdproject1.jpeg" alt="">
        <img class="n_workImageI" src="<?php echo get_template_directory_uri(); ?>/images/bdproject2.jpeg" alt="">
        <!--<img class="n_workImageI" src="<?php echo get_template_directory_uri(); ?>/images/bdproject3.jpeg" alt="">-->
        
      </div>
      <br>
   </div>

   <?php
      endwhile; //resetting the page loop
      wp_reset_query(); //resetting the page query
      ?>
</div>
<br><br><br>
<div class="n_foot"><?php get_footer();?></div>