import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  
  proyectos: Proyectos = null;

  constructor(private proyectosService: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosService.detail(id).subscribe(data => {
      this.proyectos= data;
    }, err => {
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
    })
    }
  
    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectosService.updateProyectos(id, this.proyectos).subscribe(data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      })
    }

}
