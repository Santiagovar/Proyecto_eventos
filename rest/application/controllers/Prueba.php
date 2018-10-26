<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once( APPPATH.'/libraries/REST_Controller.php' );
use Restserver\libraries\REST_Controller;

class Prueba extends REST_Controller {

public function __construct(){
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
header("Access-Control-Allow-Origin: *");

	parent::__construct();
	$this->load->database();
}
public function index(){
	echo "hola mundo";
}
public function obtener_arreglo_get($index=0){

if( $index > 2 || $index <0){
	$respuesta = array('error' => TRUE, 'mensaje'=>'no existe el elemento en la posicion'.$index);
}else{
	$arreglo =array(" tas","como","hola3");
	$respuesta =array('error' => FALSE , 'vaino '=>$arreglo[$index]);
	$this->response( $respuesta, REST_Controller::HTTP_BAD_REQUEST);

}
	

	//echo json_encode($arroeglo[$index]);
}
public function obtener_evento_get($Id){

	
	$query = $this->db->query("SELECT * FROM ` eventos` where id = ".$Id."");

//$query->result()
$this->response($query->result());
//echo json_encode($query->result());


}
}
