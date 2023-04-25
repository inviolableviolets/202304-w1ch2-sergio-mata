<?php 

  class Database {
    // DB Parametros
    private $host = 'localhost';
    private $username = 'root';
    private $password = '';
    private $db_name = 'humhemhome';
    private $conn;

    function __construct() {
      $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
      if ($this->conn->connect_errno) {
        echo 'db error';
        die();
      }
    }

    private function makeArray($stmt) {
      $stmt->bind_result($id, $url, $title, $materials, $year);
      $resArray = array();
      while ($stmt->fetch()) {
        $resArray[] = ['Id' => $id, 'url' => $url, 'Title' => $title, 'Materials' => $materials, 'Year' => $year];
      }
      return $resArray;
    }

    public function getAll() {
      $stmt = $this->conn->prepare("SELECT * FROM humhemhome_db");
      $stmt->execute();
      return $this->makeArray($stmt);
    }

  }

?>