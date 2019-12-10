<?php    

// linking CSS and JS files

function jumtech_setup(){
     wp_enqueue_script('//kit.fontawesome.com/e37af5438d.js',NULL,'5.0',false);
    wp_enqueue_style('style',get_stylesheet_uri(), NULL, '1.0', 'all');
    
    wp_enqueue_script('main',get_theme_file_uri('/js/main.js'),NULL,'1.0',true);
}

add_action('wp_enqueue_scripts','jumtech_setup');


?>