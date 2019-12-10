<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <script src="https://kit.fontawesome.com/e37af5438d.js" crossorigin="anonymous"></script>
  <title>Tamal Chakma</title>
  
  <?php wp_head(); ?>
</head>

<body>
  <div class="slogan">
    <p>"please reduce the use of plastic"</p>
  </div>

  <div class="container-flex">
    <!-- Header start -->
    <header class="site-header">
      <div class="container-header">
        <a href="<?php site_url() ?>"><img class="logo-image" src="<?php echo get_template_directory_uri(); ?>/images/tamal.jpg" alt=" tamal chakma" /></a>
<a href="<?php site_url() ?>"> <h1>
          Tamal <br />
          Chakma.
        </h1></a>
        
        <p class="designation">Full-stack web developer</p>
        <nav>
          <ul>
            <li><a id="nav-list-project" href="#project">Projects</a></li>
            <li>
              <a id="nav-list-techskill" href="#techskill">Technical skills</a>
            </li>
            <li>
              <a id="nav-list-experience" href="#experience">Expericences</a>
            </li>
            <li>
              <a id="nav-list-achievement" href="#achievement">Achievements</a>
            </li>
          </ul>
        </nav>
        <div class="contact">
          <p>Contacts</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/tamalchakma/" target="_blank">in</a></li>
            <li><a href="https://github.com/tamal11" target="_blank">github</a></li>
            <li><a href="https://codepen.io/tamal" target="_blank">codpen</a></li>

          </ul>
        </div>
      </div>
      <!-- mobile nav -->
      <div class="mobile-header">
        <i id="enter" class="fas fa-bars fa-3x"></i>
        <a href="<?php site_url() ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/tamal.jpg" alt="tamal chakma" /></a>
      </div>
      <nav class="mobile-nav" id="mobile-navigation">
        <ul>
          <li><a id="mobile-nav-list-project" href="#project">Projects</a></li>
          <li><a id="mobile-nav-list-techskill" href="#techskill">Technical skills</a></li>
          <li><a id="mobile-nav-list-experience" href="#experience">Expericences</a></li>
          <li><a id="mobile-nav-list-achievement" href="#achievement">Achievements</a></li>
        </ul>
        <i id="exit" class="fas fa-times fa-3x"></i>
      </nav>
    </header>
    <!-- header-end -->

    
  