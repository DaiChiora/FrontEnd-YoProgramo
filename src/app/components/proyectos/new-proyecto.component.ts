import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  link: string = '';

  constructor(private router: Router, private proyectosService: ProyectosService){}
  
  
  ngOnInit(): void {
  
  }
  onCreate(): void {
    const proyecto = new Proyectos (this.nombre, this.descripcion, this.link);
    this.proyectosService.addProyectos(proyecto).subscribe({
      next:(data) => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    },
     error:(err) => {
      alert("Falló");
      this.router.navigate(['']);
    }
    
  });

}

}
