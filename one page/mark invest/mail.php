<?php

$recepient = "89030050430@mail.ru, 7268633@mail.ru";
// $recepient = "ma.deal@yandex.ru";
$sitename = "Марк Инвест";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$pagetitle = "Заказ звонка с \"$sitename\"";
$message = "Имя: $name\n Телефон: $phone";


mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>