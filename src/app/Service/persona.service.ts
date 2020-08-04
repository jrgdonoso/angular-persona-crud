import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpHeaderResponse} from '@angular/common/http'
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})


export class PersonaService {
  
  public url:string;
  private httpHeadders=new HttpHeaders({'Content-Type':'application/json'})  

  constructor( private http:HttpClient ) { 
    this.url="http://localhost:8080/api/clientes/";

  }
  

  public  listar():Observable<Persona[]>{
        return this.http.get<Persona[]>(this.url).pipe(
          map(response=> response as Persona[] )  );
  }


  public guardar(persona:Persona):Observable<Persona>{
     return this.http.post<Persona>(this.url, persona, {headers:this.httpHeadders});
  }


  public loadPersonaById(id:number):Observable<Persona>{

    //return this.http.get(this.url+"/"+id+"/").pipe(map(response=>response as Persona))
    return this.http.get<Persona>(this.url+id+"/");

  }



  public actualizar(persona:Persona):Observable<Persona>{
     return this.http.put<Persona>(this.url+persona.id, persona, {headers:this.httpHeadders});
  }


  public delete(id:number):Observable<any>{
     return this.http.delete(this.url+id+"/");
  }
  


}
