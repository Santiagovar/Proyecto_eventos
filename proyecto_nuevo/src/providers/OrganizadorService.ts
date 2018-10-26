
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {URL_SERVICIOS} from "../config/url.servicios";




	@Injectable()
	export class OrganizadorService {
		organizador:any[] = [];

		//cantidadEventos:number = 0;
		constructor(public http: Http) {
		
		



		}
		cargar_todos( id = 0){

let promesa = new Promise( (resolve, reject)=>{
let url = URL_SERVICIOS + "/organizador/todos/" + id ;
this.http.get(url).map(resp => resp.json()).subscribe(data =>{
	console.log(data);
	if(data.error){

	}else{
this.organizador.push(...data.organizador);

console.log(this.organizador);
	}

	resolve();
})
	
});

return promesa;
}
}


