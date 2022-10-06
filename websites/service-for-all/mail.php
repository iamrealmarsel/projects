<?php

$recepient = "ma.deal@yandex.ru";
$sitename = "AutoService";


$name = trim($_POST["name"]);
$model = trim($_POST["model"]);
$mileage = trim($_POST["mileage"]);
$message = trim($_POST["message"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$messageres = "
ФИО: $name\n
Телефон: $phone\n
Почта: $mail\n
Модель: $model\n
Пробег: $mileage\n
Сообщение: $message\n
";


mail($recepient, $pagetitle, $messageres, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>
