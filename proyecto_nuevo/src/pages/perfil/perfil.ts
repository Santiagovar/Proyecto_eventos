import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GuardadosService } from "../../providers/GuardadosService";
import { EventosService } from "../../providers/EventosService";
import { ConfigPage } from "../../pages/config/config";


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private _gs: GuardadosService, private _Es: EventosService, private viewCtrl: ViewController) {

  }

  
config(){
	this.navCtrl.push(ConfigPage);
}
}
/*
boton de salir:
  <ion-buttons start>
      <button ion-button *ngIf="_us.activo()" (click)="_us.cerrar_sesion()">
        salir
      </button>
    </ion-buttons>


Boton para el historial:
     <button ion_button icon-only (click)="ver_guardados()">
    <ion-icon name="star" ></ion-icon>
    <ion-badge color="danger" class="lista-numero" >{{_gs.items.length}}</ion-badge>
  </button>
*/