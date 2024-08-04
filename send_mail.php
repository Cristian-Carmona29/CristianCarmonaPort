<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'felipe.291105@gmail.com'; // Tu correo
    $mail->Password = 'rmur vofh lapd telo'; // Contraseña de aplicación
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Remitente y destinatario
    $mail->setFrom('felipe.291105@gmail.com', 'Cristian Carmona');
    $mail->addAddress('felipe.291105@gmail.com');

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = 'Prueba de Envío';
    $mail->Body = 'Este es un correo de prueba.';

    $mail->send();
    echo 'Correo enviado con éxito';
} catch (Exception $e) {
    echo 'Error al enviar el correo: ', $mail->ErrorInfo;
}
?>
