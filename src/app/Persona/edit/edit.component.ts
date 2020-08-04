import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/Service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  persona:Persona=new Persona;
 
  constructor(  private personaService:PersonaService, private activateRoute:ActivatedRoute , private router:Router  ) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params=>{
      if(params['id']){
          this.personaService.loadPersonaById(params['id']).subscribe(response=> this.persona = response)
      }
    })

  }

  editar(persona:Persona):void{
    console.log("persona: "+persona.id)
       this.personaService.actualizar(this.persona).subscribe(response=> response as Persona)
      
     //  this.router.navigate(['/listar'])
  }



}
