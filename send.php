<?php
	$project_name = "Тестовая форма";
	$from_email = "i@up-site.com.ua";
	$to_email = "ydobniyodessa@gmail.com";
	
	$name = trim($_POST["name"]);
    $phone = trim($_POST["phone"]); 
    
    $name2 = trim($_POST["name2"]);
	$phone2 = trim($_POST["phone2"]);
	
    $message = "Имя: $name \nТелефон: $phone" ;
    $message2 = "Имя: $name2 \nТелефон: $phone2" ;
	$headers = "From: $from_email \r\n";
	$headers .= "Content-type: text/html; charset=\"utf-8\"";
	
	$send_mail = mail($to_email, $project_name, $message, $headers);
	$send_mail2 = mail($to_email, $project_name, $message2, $headers);
	if($send_mail){
		
	}
	else{
		echo "Ошибка!";
    }
    if($send_mail2){
		
	}
	else{
		echo "Ошибка!";
	}
?>
