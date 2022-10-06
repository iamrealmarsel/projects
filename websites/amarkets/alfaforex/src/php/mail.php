<?php

$recepient = "ma.deal@yandex.ru";
$sitename = "Swimming Academy";

$tel = trim($_POST["tel"]);
$name = trim($_POST["name"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";

$message = "
Телефон: $tel\n
Имя: $name\n
";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>