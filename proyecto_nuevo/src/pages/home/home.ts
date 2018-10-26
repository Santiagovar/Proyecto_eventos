import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
import { EventosService} from "../../providers/EventosService";
import { OrganizadorService} from "../../providers/OrganizadorService";
import { GuardadosService} from "../../providers/GuardadosService";
import { OrganizadorPage } from "../organizador/organizador";
import {UsuarioService} from "../../providers/UsuarioService";
import { ConfigPage} from "../config/config";
import { LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

organizadorPage = OrganizadorPage;

//paginaRara:number = this._es.pagina*3;
  constructor(public navCtrl: NavController, private _es: EventosService, private _gs: GuardadosService, private _us: UsuarioService
  	,private modalCtrl: ModalController) {


  }

Siguiente_Pagina(infiniteScroll){
			this._es.cargar_todos()
			.then( ()=> {
				infiniteScroll.complete();
			});
}
	ver_guardados(){
		let modal:any;
	if(this._us.token){
		//mostrar pagina de las guardados
		modal = this.modalCtrl.create(ConfigPage);
	}
		else{
			//mostrar el login
			modal = this.modalCtrl.create(LoginPage);
		}
		modal.present();
		
		modal.onDidDismiss((abrirGuardador:boolean)=>{

if(abrirGuardador ){
	this.modalCtrl.create(ConfigPage).present();

}

		})
	
}

 perfil() {
    this.navCtrl.push(ConfigPage);

  }
}
