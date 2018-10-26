import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController} from 'ionic-angular';
import {PremiosService} from "../../providers/PremiosProvider";
import {UsuarioService} from "../../providers/UsuarioService";
import {GuardadosService} from "../../providers/GuardadosService";


import {DescripcionPremioPage} from "../../pages/descripcion-premio/descripcion-premio";
import {LoginPage} from "../../pages/login/login";


/**
 * Generated class for the PremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-premios',
  templateUrl: 'premios.html',
})
export class PremiosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private _ps:PremiosService
  	,private _us:UsuarioService,private modalCtrl: ModalController, private alertCtrl:AlertController,
    private _gs:GuardadosService
  	) {
  }

Siguiente_Pagina(infiniteScroll){
			this._ps.cargar_todos()
			.then( ()=> {
				infiniteScroll.complete();
			});
}
presentConfirm(item:any) {
  let alert = this.alertCtrl.create({
    title: item.Nombre_premio,
    message: item.Descripcion_premio,
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Comprar',
        handler: () => {
          console.log('Buy clicked');
          this._gs.realizar_compra(item)
        }
      },
      {
        text: 'Ver Premio',
        
        handler: () => {
          		let modal:any;
         if(this._us.token){
         	this._ps.recibir_item(item);
         	modal = this.modalCtrl.create(DescripcionPremioPage);
        }else{
        	modal = this.modalCtrl.create(LoginPage);
        }
        modal.present();
        modal.onDidDismiss((abrirGuardador:boolean)=>{

if(abrirGuardador ){
	this.modalCtrl.create(DescripcionPremioPage).present();

}
      
  })
}
}
    ]
  }
  );
  alert.present();
}
}


