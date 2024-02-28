<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since");
header('Access-Control-Allow-Methods: GET, POST, PUT');

require("class.phpmailer.php");
require("class.smtp.php");


$a_quien = array("eduardo@fincasur.com.ar","emilce@fincasur.com.ar");

//$a_quien = array("defelicerafael@gmail.com","prueba@alihuenalto.com.ar");

$contador = file_get_contents("contador.txt");
if ($contador % 2 == 0) {
    $envio_a = $a_quien[0]; 
} else {
    $envio_a = $a_quien[1]; 
}




if(isset($_POST["nombre"]) && isset($_POST["apellido"])){

function ValidarDatos($campo){
//Array con las posibles cabeceras a utilizar por un spammer
$badHeads = array("Content-Type:",
"MIME-Version:",
"Content-Transfer-Encoding:",
"Return-path:",
"Subject:",
"From:",
"Envelope-to:",
"To:",
"bcc:",
"cc:");

foreach($badHeads as $valor){
if(strpos(strtolower($campo), strtolower($valor)) !== false){
header( "HTTP/1.0 403 Forbidden");
exit;
}
}
}
//Ejemplo de llamadas a la funcion
ValidarDatos($_POST['nombre']);
ValidarDatos($_POST['apellido']);
ValidarDatos($_POST['email']);
ValidarDatos($_POST['celular']);    
ValidarDatos($_POST['que']);   
    
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email =  $_POST["email"];
$celular = $_POST["celular"];
$que = $_POST["que"];

if($que=='llamen'){
    $texto = 'Hola, deseo recibir un llamdo telefónico para obtener info sobre el desarrollo Alihuen Alto nueva etapa';
}
if($que=='info'){
    $texto = 'Hola, deseo recibir más info por mail sobre el desarrollo Alihuen Alto nueva etapa';
} 
if($que=='visitar'){
    $texto = 'Hola, deseo concertar una cita para visitar el desarrollo Alihuen Alto nueva etapa';
} 

$smtpHost = "c1992079.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "no-reply@c1992079.ferozo.com";  // Mi cuenta de correo
$smtpClave = 'Gb5ipbWmH@';  // Mi contraseña

$cuerpo = "Hola, han realizado una consulta v&iacute;a web :) \n\n";
$cuerpo .= "$nombre $apellido se ha contactado por medio de nuestro formulario de contacto. \n\n";
if($email){
    $cuerpo .= "Su email es: ".$email."\n\n";
}
if($celular){
    $cuerpo .= "Celular: ".$celular."\n\n";
}
$cuerpo .=  $texto."\n\n";
$cuerpo.= " - Eso es todo, que tengas una linda semana! - ";

    
                             
$mail = new PHPMailer(true);
$mail->IsSMTP();
//$mail->SMTPDebug = 2;
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $smtpUsuario; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($envio_a); 
                    //$mail->AddAddress($emailMili);
                    //$mail->AddAddress($emailJuli);// Esta es la dirección a donde enviamos los datos del formulario
$mail->AddReplyTo("info@fincasur.com.ar"); // Esto es para que al recibir el correo y poner Responder, lo haga a la cuenta del visitante. 
$mail->Subject = "Te han contactado desde la WEB :)"; // Este es el titulo del email.
$mensaje = $cuerpo;
$mensajeHtml = nl2br($cuerpo);
$mail->Body = "{$mensajeHtml}"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje}"; // Texto sin formato HTML
                    // FIN - VALORES A MODIFICAR //
                    //$mail->SMTPSecure = 'ssl';
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send(); 
    if($estadoEnvio){
        $contador++;
        file_put_contents("contador.txt", $contador);
        echo "1";
        
    } else {
        echo "0";
       
    }
}          