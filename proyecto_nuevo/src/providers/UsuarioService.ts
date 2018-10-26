import {Injectable} from '@angular/core';
//UrlSearchParams sirve para mandar parametros
import {Http,URLSearchParams } from '@angular/http';
import {URL_SERVICIOS} from "../config/url.servicios";
import {AlertController,Platform } from "ionic-angular";
import {Storage} from '@ionic/storage';

 
	@Injectable()
	export class UsuarioService {
token:string;
id_usuario:string;
		constructor(public http: Http,private alertCtrl: AlertController, private plataform : Platform, private storage: Storage) {
this.cargar_storage();

		}

activo():boolean{
	//funion para saber si la sesion está activa 
	if(this.token){
		return true;

	}
	else{
		return false;
	}
}
 
  ingresar(correo:string, contrasena:string){

let data = new URLSearchParams();
//envia los datos
data.append("correo", correo);
data.append("contrasena", contrasena);

let url = URL_SERVICIOS + "/login";

//respuesta mientras se espera
return this.http.post( url, data )
				.map(resp =>{
					let data_resp = resp.json();
					console.log(data_resp);
					if( data_resp.error){
this.alertCtrl.create({
	title : "error al iniciar",
	subTitle : data_resp.mensaje,
	buttons : ["OK"]
}).present();
					}else{
						this.token = data_resp.token;
						this.id_usuario = data_resp.id_usuario;
						
						//guardar Storage
this.guardar_storage();
					}
				})
  }
  cerrar_sesion(){
this.token = null;
this.id_usuario = null;
this.guardar_storage();
  }
  
private guardar_storage(){
if(this.plataform.is("cordova")){
	//dispositivos
this.storage.set('token',this.token);
this.storage.set('id_usuario',this.id_usuario);


}else{
//computador
if(this.token){
localStorage.setItem("token", this.token);
localStorage.setItem("id_usuario", this.id_usuario);
}else{
	localStorage.removeItem("token");
	localStorage.removeItem("id_usuario");
}
}
}

cargar_storage(){

	let promesa = new Promise((resolve, reject) =>{
if(this.plataform.is("cordova")){
//dispositivo
this.storage.ready()
//revisa si el almacenamiento del dispositivo está bien
.then( ()=>{
 this.storage.get("token").then( token => {
 	if( token ){
 		//revisa si no llega nada nulo
 		this.token = token;
 	}
 })
 	this.storage.get("id_usuario").then( id_usuario => {
 	if( id_usuario ){
 		//revisa si no llega nada nulo
 		this.id_usuario = id_usuario;
 	}
 	resolve();

})
 	})
}else{
//computador
if(localStorage.getItem("token")){
this.token = localStorage.getItem("token") ;
this.id_usuario = localStorage.getItem("id_usuario") ;

}
resolve();
}

	});

	return promesa;

}
	}