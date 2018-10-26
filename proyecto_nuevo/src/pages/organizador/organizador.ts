import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrganizadorService } from "../../providers/OrganizadorService";


/**
 * Generated class for the OrganizadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-organizador',
  templateUrl: 'organizador.html',
})
export class OrganizadorPage {
	//variable que tiene el id del organizador
	eventoIdOr:any ;

organizadorArray:any[]=[];
	

  constructor(public navCtrl: NavController, public navParams: NavParams,public _Os: OrganizadorService ) {


  	console.log( this.navParams.get("evento"));
  	this.eventoIdOr = this.navParams.get("evento");
  	this._Os.cargar_todos(this.eventoIdOr);
this._Os.organizador = [];




  }



 	
 

  }


