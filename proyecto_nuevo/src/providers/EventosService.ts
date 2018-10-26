import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {URL_SERVICIOS} from "../config/url.servicios";

	@Injectable()
	export class EventosService {
		pagina:number = 0;
		eventos:any[] = [];
		//cantidadEventos:number = 0;
		constructor(public http: Http) {
			this.cargar_todos();
			//this.obtener_tamaño();



		}
		cargar_todos( ){

let promesa = new Promise( (resolve, reject)=>{
let url = URL_SERVICIOS + "/eventos/todos/" + this.pagina;
this.http.get(url).map(resp => resp.json()).subscribe(data =>{
	console.log(data);
	if(data.error){

	}else{
this.eventos.push(...data.eventos);
this.pagina +=1;
console.log(this.eventos);
	}

	resolve();
})
	
});

return promesa



		}
		/*obtener_tamaño(){
			this.cantidadEventos = this.eventos.length;
console.log(this.cantidadEventos);
		}
*/
	}
