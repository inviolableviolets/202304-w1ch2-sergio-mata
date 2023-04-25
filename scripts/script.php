<?php

  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['first_name']) && isset($_POST['email']) && isset($_POST['comments']) &&  isset($_POST['telephone'])) {
      $mail_to = 'sergiomataherrero@gmail.com';
      $subject = 'humhemhome';

      $email_message = "Detalles del formulario de contacto:\n\n";
      $email_message .= "Nombre: " . $_POST['name'] . "\n";
      $email_message .= "E-mail: " . $_POST['email'] . "\n";
      $email_message .= "Teléfono: " . $_POST['phone'] . "\n\n";
      $email_message .= "C. Postal: " . $_POST['city'] . "\n\n";
      $email_message .= "Comentarios:\n\n" . $_POST['message'] . "\n\n";

      $success = mail($mail_to, $subject, $email_message);
      if ($success) {
        header("Location: /index.html");
        die();
      } else {
        echo 'Error al enviar, por favor, inténtalo de nuevo.';
      }

    } else {
      echo 'Algun campo obligatorio no está rellenado, por favor, revísalo.';
    }
  }

?>