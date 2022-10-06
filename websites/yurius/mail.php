<?php

$recepient = "info@yandex.ru";
$sitename = "SPONDET CERTA YURIUS";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["comment"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";

$message = "
Имя: $name\n 
Телефон: $phone\n
Почта: $email\n
Сообщение: $comment
";


mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>
