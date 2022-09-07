<?php
/*
  Plugin Name: WhatsApp Random Phone
  Plugin URI: https://www.pyramit.cl
  Description: Choose a random phone number from a list as WhatsApp contact phone number.
  Version: 1.0
  Author: PyramIT
  Author URI: https://www.pyramit.cl
  License: GPLv2 or later
*/

// Add plugin style
function wpwrp_load_plugin_css()
{
  $plugin_url = plugin_dir_url( __FILE__ );

  wp_enqueue_style( 'wpwrp_style', $plugin_url . 'css/style.css' );
}
add_action( 'wp_enqueue_scripts', 'wpwrp_load_plugin_css' );

// Add plugin content on body open
add_action('wp_footer', 'wpwrp_load_plugin_content', 10);
function wpwrp_load_plugin_content()
{
  $htmlContent = "
    <div id=\"whatsapp-random-plugin-wrapper\">
      <div id=\"whatsapp-random-plugin\">
        <div id=\"whatsapp-random-icon\"></div>
        <div id=\"whatsapp-random-container\" class=\"hidden\">
          <div id=\"whatsapp-random-confirm-container\" class=\"hidden\">
            <label class=\"whatsapp-random-text\">
              Do you want to chat?
            </label>
            <button id=\"whatsapp-confirm-button-yes\">✔</button>
            <button id=\"whatsapp-confirm-button-no\">❌</button>
          </div>
          <div id=\"whatsapp-random-display-container\" class=\"hidden\">
            <label class=\"whatsapp-random-text\">
            </label>
          </div>
        </div>
      </div>
    </div>
  ";

  echo $htmlContent;
}

// Add plugin script  
function wpwrp_load_plugin_script()
{
  $plugin_url = plugin_dir_url( __FILE__ );

  wp_enqueue_script( 'wpwrp_config', $plugin_url . 'js/config.js' );
  wp_enqueue_script( 'wpwrp_aes', $plugin_url . 'js/aes.js' );
  wp_enqueue_script( 'wpwrp_cipher', $plugin_url . 'js/cipher.js' );
  wp_enqueue_script( 'wpwrp_script', $plugin_url . 'js/script.js' );
}
add_action( 'wp_enqueue_scripts', 'wpwrp_load_plugin_script' );