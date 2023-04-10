import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  tituloExp: string = '';
  fechaExp: string = '';
  descExp: string = '';
  imgExp: string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router){}

  
  
  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Experiencia (this.tituloExp, this.fechaExp, this.descExp, this.imgExp);
    this.experienciaService.addExperiencia(expe).subscribe({
      next:(data) => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    },
     error:(err) => {
      alert("Falló");
      this.router.navigate(['']);
    }
    
  });

}}
