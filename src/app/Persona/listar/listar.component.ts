import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Service/persona.service';
import { Persona } from 'src/app/Modelo/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';





@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  public listaPersonas:Persona[];
  constructor( private personaService:PersonaService, private router:Router ) { }

  ngOnInit(): void {

    this.personaService.listar().subscribe(personas=> this.listaPersonas=personas);

  }


     
  delete(id:number):void{
    this.personaService.delete(id).subscribe(response => {
       response as any;  
       alert("persona eliminada");
       window.location.reload();
      }
  )};   
  
 

}
