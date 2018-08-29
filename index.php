<?php

require_once("support-files/head.html");

for ($i=1; $i < 9; $i++) {
  require_once( "content-slots/slot-" . $i . ".html" );
}

require_once("support-files/close.html");


?>
