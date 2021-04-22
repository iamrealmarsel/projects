<?php

$recepient = "ma.deal@yandex.ru";
$sitename = "Jet Skills";

$name = trim($_POST["name"]);
$lastname = trim($_POST["lastname"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$mes = trim($_POST["mes"]);
$prof = trim($_POST["prof"]);

$pagetitle = "Заказ звонка с \"$sitename\"";
$message = "
Имя: $name\n
Фамилия: $lastname\n
Телефон: $phone\n
Почта: $mail\n
Область знаний: $prof\n
Комментарий: $mes
";


mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>