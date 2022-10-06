<?php

$recepient = "ma.deal@yandex.ru";
$sitename = "аптека";

$title = trim($_POST["title"]);
$rate = trim($_POST["rate"]);
$msg = trim($_POST["msg"]);

$pagetitle = "Заказ звонка с \"$sitename\"";
$message = "
Заголовок: $title\n 
Рейтинг: $rate\n
Сообщение: $msg\n
";



mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>