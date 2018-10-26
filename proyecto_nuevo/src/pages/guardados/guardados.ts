import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';
import {GuardadosService} from "../../providers/GuardadosService";
/**
 * Generated class for the GuardadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	private _gs: GuardadosService,
  	private viewCtrl: ViewController) {
  }


}
