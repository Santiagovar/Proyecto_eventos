import {Injectable} from '@angular/core';
import {Http,URLSearchParams} from '@angular/http';
import {URL_SERVICIOS} from "../config/url.servicios";
import {AlertController,Platform,ModalController} from "ionic-angular";

//stogare
import { Storage } from '@ionic/storage';

//usuarioService 
import {UsuarioService} from "./UsuarioService";

//paginas del modal
import {LoginPage} from "../pages/login/login";
import {ConfigPage} from "../pages/config/config";



	@Injectable()
	export class GuardadosService {
	items:any[] = [];
	compras:any[] = [];


		constructor(public http: Http,
		 private alertCtrl: AlertController,
		 private plataform:Platform,
		 private storage: Storage,
		 private modalCtrl:ModalController,
		 private _us: UsuarioService) {
	this.cargar_storage();





	}

	agregar_guardado( item_enviado:any){
	for(let item of this.items){
		if(item.id == item_enviado.id){
			this.alertCtrl.create({
title : "Ya se ha agregado a tus guardados",
subTitle: item_enviado.NombreEvento + " Ya quedó guardado para asistir",
buttons: ["OK"]
			}).present();
			return;
		}

	}
	this.items.push(item_enviado);
	this.guardar_storage();
}
remover_item(idx:number){
	this.items.splice(idx,1);
	this.guardar_storage();
}


realizar_compra(item_comprado:any){
let data = new URLSearchParams();
data.append("items", item_comprado.id_Premio);
let url =  `${URL_SERVICIOS}/compras/realizar_orden/${this._us.token}/${this._us.id_usuario}`;
this.http.post(url, data)
.subscribe( resp =>{
	let respuesta = resp.json();

	if(respuesta.error){
//error
this.alertCtrl.create({
			title:"Error en la compra",
			subTitle:respuesta.mensaje,
			buttons:["OK"]
			
		}).present();
	}else{
		this.items = [];
		this.alertCtrl.create({
			title:"Compra completa",
			subTitle:"Aqui van las instrucciones",
			buttons:["OK"]
			
		}).present();
	}
} )
}

private guardar_storage(){
if(this.plataform.is("cordova")){
	//dispositivos
this.storage.set('items',this.items);
}else{
//computador
localStorage.setItem("item", JSON.stringify(this.items));
}
}
cargar_storage(){

	let promesa = new Promise((resolve, reject) =>{
if(this.plataform.is("cordova")){
//dispositivo
this.storage.ready()
//revisa si el almacenamiento del dispositivo está bien
.then( ()=>{
 this.storage.get("items").then( items => {
 	if( items ){
 		//revisa si no llega nada nulo
 		this.items = items;
 	}
 	resolve
 })
})
}else{
//computador
if(localStorage.getItem("items")){
this.items = JSON.parse( localStorage.getItem("items") );

}
resolve();
}

	});

	return promesa;

}

cargar_ordenes(){
let url =  `${URL_SERVICIOS}/compras/obtener_pedidos/${this._us.token}/${this._us.id_usuario}`;

this.http.get(url)
.map(resp => resp.json())
.subscribe(data =>{
	if(data.error){
		//mostrar la alerta
	}
	else{
		this.compras = data.compras;

	}
})
}

}


