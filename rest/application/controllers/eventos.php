<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once( APPPATH.'/libraries/REST_Controller.php' );
use Restserver\libraries\REST_Controller;

class Eventos extends REST_Controller {

public function __construct(){
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
header("Access-Control-Allow-Origin: *");

	parent::__construct();
	$this->load->database();
}
public function todos_get( $pagina = 0 ){
$pagina = $pagina*3;

	$query = $this->db->query('SELECT * FROM ` eventos` limit '. $pagina .',3');



	$respuesta = array(
		'error' => False,
		'eventos' => $query->result_array()
	);

	$this->response($respuesta);

}

 public function buscar_get( $termino = "no especifico" ){

    // LIKE
    $query = $this->db->query("SELECT * FROM `eventos` where NombreEvento like '%".$termino."%'");

    $respuesta = array(
            'error' => FALSE,
            'termino'=> $termino,
            'productos' => $query->result_array()
          );

    $this->response( $respuesta );

  }
}