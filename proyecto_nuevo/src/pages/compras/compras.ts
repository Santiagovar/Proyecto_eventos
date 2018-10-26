import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {GuardadosService} from "../../providers/GuardadosService";

 
@IonicPage()
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController
  	, private _gs:GuardadosService) {
  }
 ionViewWillEnter(){
 	console.log("cargando conpras");
 	this._gs.cargar_ordenes();
 }

  
}
