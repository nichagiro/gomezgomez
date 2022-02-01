<?php

$email = $_POST['email'];
$name = $_POST['name'];
$msg = $_POST['msg'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];

if($email == '' | $name == '' | $msg =='' | $subject ==''){
    echo json_encode('error');
}   
else {
    $to = 'admin@trasteosgomezgomez.com';
    $asunto = "Correo desde pagina web";
    $message =  "Email: $email".
                "\nNombre: $name".
                "\nAsunto: $subject".
                "\nTelefono: $phone".
                "\n\nMensaje: $msg";
    $headers = "From:".$name.' <'.$email.'>';
    mail($to, $subject, $message, $headers);
    echo json_encode ('ok');
}
