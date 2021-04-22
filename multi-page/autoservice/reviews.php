<?php

$recepient = "ma.deal@yandex.ru, a2ice@yandex.ru";
$sitename = "AutoService";


$name = trim($_POST["name"]);
$model = trim($_POST["model"]);
$service = trim($_POST["service"]);
$message = trim($_POST["message"]);
$mail = trim($_POST["mail"]);


$pagetitle = "Отзыв с сайта \"$sitename\"";
$messageres = 
"ФИО: $name\n 
Почта: $mail\n
Модель: $model\n
Услуга: $service\n
Сообщение: $message\n";


mail($recepient, $pagetitle, $messageres, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>