<?php

$recepient = "ma.deal@yandex.ru";
$sitename = "Eattobefit";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$program = $_POST["program"];


$pagetitle = "Новый заказ с сайта \"$sitename\"";
$message = "ФИО: $name\n Телефон: $phone\n Почта: $mail\n Программа: $program";


mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>