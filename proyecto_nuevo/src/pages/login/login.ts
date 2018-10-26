import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

import {UsuarioService}from "../../providers/UsuarioService"
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
correo:string = "";
contrasena:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, 
  	private _us:UsuarioService) {




}
ingresar(){
	this._us.ingresar(this.correo,this.contrasena)
	.subscribe(()=>{

if( this._us.activo() ){
	this.viewCtrl.dismiss(true);
	
}

})
}
}
