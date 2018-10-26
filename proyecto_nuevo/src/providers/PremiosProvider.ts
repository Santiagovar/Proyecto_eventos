import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {URL_SERVICIOS} from "../config/url.servicios";

	@Injectable()
	export class PremiosService {
		pagina:number = 0;
		premios:any[] = [];
		item_a_describir:any[] = [];
		//cantidadEventos:number = 0;
		constructor(public http: Http) {
			this.cargar_todos();
			//this.obtener_tamaño();



		}
		cargar_todos( ){

let promesa = new Promise( (resolve, reject)=>{
let url = URL_SERVICIOS + "/premios/todos/" + this.pagina;
this.http.get(url).map(resp => resp.json()).subscribe(data =>{
	console.log(data);
	if(data.error){

	}else{
this.premios.push(...data.premios);
this.pagina +=1;
console.log(this.premios);
	}

	resolve();
})
	
});

return promesa



		}
recibir_item(item:any){
this.item_a_describir = item;
}
	}
