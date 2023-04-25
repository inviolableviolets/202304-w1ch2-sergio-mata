<?php

  include_once "./models/Database.php";

  $_db = new Database;

  switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
      $listaProductos = $_db->getAll();
      header("Content-Type: application/json");
      echo json_encode($listaProductos);
      http_response_code(200);
      break;
    
    default:
      echo 'Metodo: ' . $_SERVER['REQUEST_METHOD'];
      break;
  }

?>