<?php

// $recepient = "hello@programmatic-lab.ru";
$recepient = "ma.deal@yandex.ru";
$sitename = "Programmatic-Lab";

$name = trim($_POST["name"]);
$task = trim($_POST["task"]);
$money = trim($_POST["money"]);
$email = trim($_POST["email"]);
$tel = trim($_POST["tel"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";

$message = "
Имя: $name\n 
Задача: $task\n
Бюджет: $money\n
Почта: $email\n
Телефон: $tel
";


mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>