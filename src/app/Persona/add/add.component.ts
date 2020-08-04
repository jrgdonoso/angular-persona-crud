import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Service/persona.service';
import { Persona } from 'src/app/Modelo/Persona';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  //public persona: Persona=new Persona();//Tambien se puede definir e inicializar de una vez
  public persona: Persona;


  constructor(private personaService:PersonaService, private router:Router) { }

  ngOnInit(): void {
    this.persona=new Persona();
  }


  guardar(): void{
        
      this.personaService.guardar(this.persona).subscribe(response=> {
        this.router.navigate(['listar'])
        response as Persona
      })


  }

}
