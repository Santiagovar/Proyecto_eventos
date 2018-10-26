import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController , ViewController} from 'ionic-angular';
import {GuardadosService} from "../../providers/GuardadosService";
import {UsuarioService} from "../../providers/UsuarioService";
import {GuardadosPage} from "../../pages/guardados/guardados";
import {HomePage} from "../../pages/home/home";
import {PerfilPage} from "../../pages/perfil/perfil";
import {ComprasPage} from "../../pages/compras/compras";



@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private _gs:GuardadosService,
  	private modalCtrl: ModalController, private viewCtrl: ViewController,private _us:UsuarioService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }
guardados(){
	let modal:any;
modal = this.modalCtrl.create(GuardadosPage);
modal.present();
}
perfil(){
	let modal:any;
modal = this.modalCtrl.create(PerfilPage);
modal.present();
}
compras(){
	let modal:any;
modal = this.modalCtrl.create(ComprasPage);
modal.present();
}
cerrar_sesion(){
	this._us.cerrar_sesion();
	this.viewCtrl.dismiss()
}
}
