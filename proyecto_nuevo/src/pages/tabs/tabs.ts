import { Component } from '@angular/core';
import { HomePage } from "../../pages/home/home";
import {PremiosPage} from "../../pages/premios/premios"
import {UbicacionPage} from "../../pages/ubicacion/ubicacion";
import {GuardadosService} from "../../providers/GuardadosService";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  premiosRoot = PremiosPage;
  ubicacionRoot = UbicacionPage;
  seleccionado:number;
constructor(private _gs: GuardadosService){
	
  }	
  }

