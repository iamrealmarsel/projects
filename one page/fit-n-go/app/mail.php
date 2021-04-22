<?php

$recepient = "ems.odintsovo@gmail.com";
$sitename = "Fit-n-Go!";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";

$message = "
Имя: $name\n 
Телефон: $tel\n
";


mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>