<?php
#defined('BASEPATH') OR exit('No direct script access allowed');

#require_once( APPPATH.'/libraries/REST_Controller.php' );
#use Restserver\libraries\REST_Controller;

#class Guardados extends REST_Controller {

#public function __construct(){
#header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
#header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
#header("Access-Control-Allow-Origin: *");

#	parent::__construct();
#	$this->load->database();
#}
#public function realizar_guardado_post($token = "0",$id_usuario="0"){
#	$data = $this->post();
#	if( $token == "0" || $id_usuario == "0"){
#		$respuesta = array(
#			'error'=> TRUE,
#			'mensaje'=> "Token y/o usuario invalido"
#		);
#		$this->response( $respuesta, REST_Controller::HTTP_BAD_REQUEST);
#		return;

#	}
#	if( !isset( $data["items"]) || strlen($data['items'])==0){

#		$respuesta = array(
#			'error'=> TRUE,
#			'mensaje' =>"faltan los items en el post"
#);
#		$this->response( $respuesta, REST_Controller::HTTP_BAD_REQUEST);
#		return;
#	}
#	$condiciones = array('id' => $id_usuario,'token'=>$token );
###	$this->db->where($condiciones);
	#$query = $this->db->get('login');
	#$existe = $query->row();

	#if( !$existe ){
	#	$respuesta = array(
	#		'error'=> TRUE,
	#		'mensaje'=> "Token y/o usuario incorrectos"
#);
#		$this->response( $respuesta);
#		return;
	}
##$this->db->reset_query();
#$insertar = array('usuario_id' => $id_usuario );
#$this->db->insert( 'eventos_guardados', $insertar);
#$evento_guardado_id = $this->db->insert_id();
 
 #$this->db->reset_query();
# $this = explode(',', $data['items']);

 #foreach ($items as &$IdEvento) {
 #	$data_insertar  = array('IdEvento' => $IdEvento, 'orden_id' );
 #}



#}
#}