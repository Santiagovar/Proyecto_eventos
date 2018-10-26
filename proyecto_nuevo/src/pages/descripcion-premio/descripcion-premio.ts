import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {PremiosService} from "../../providers/PremiosProvider"

@IonicPage()
@Component({
  selector: 'page-descripcion-premio',
  templateUrl: 'descripcion-premio.html',
})
export class DescripcionPremioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private _ps:PremiosService,
  	private ViewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescripcionPremioPage');
  }

}
