<?php
header('Access-Control-Allow-Origin: *');  
$recepient = "online@atol.ru,s@atol.ru";

$company = trim($_POST["company"]);
$site = trim($_POST["site"]);
$city = trim($_POST["city"]);
$name = trim($_POST["name"]);
$post = trim($_POST["post"]);
$phone = trim($_POST["phone"]);
$transaction = trim($_POST["transaction"]);
$message = "
Компания: $company\n
Сайт: $site\n
Город: $city\n
ФИО: $name\n
E-mail: $post\n
Телефон: $phone\n
Транзакций / сек: $transaction
";

$pagetitle = "Новая заявка на демо-магазин с посадочной страницы atol-online.ru";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");



