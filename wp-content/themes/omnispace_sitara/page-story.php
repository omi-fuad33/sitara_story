<?php
   /*
       Template Name: Story
    */
   ?>
<?php
   get_header();
      ?>
<div class="">
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
   <div class="n_contButton">
   <a href="#" class="button">Guideline</a>
   <a href="#" class="button">Eligibility</a>
   <a href="#" class="button">What Heppens Next?</a>
   <a href="#" class="button">Submit Here</a>
   </div>
   
   <div class="n_orange"></div>
   <div>
   
   <style>
.button {
  background-color:#ad75ad;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
</style>



   <div class="n_cont n_robotoRegular">
       
<!--           <div class="row">-->
      

<!--<button class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12"><a href="#" target="_blank">Guidelines<a/></button>-->
<!--<button class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12"><a href="#" target="_blank">Guidelines<a/></button>-->

<!--  </div>-->
      <?php the_content();?>
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