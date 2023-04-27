import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  isLogged = false;
  proyectos: Proyectos[]=[];
  
  constructor(private proyectosService: ProyectosService, private tokenService: TokenService) {}
  
  
  ngOnInit(): void {
    this.getProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }else {
      this.isLogged = false;}
  }

  public getProyectos():void {
    this.proyectosService.getProyectos().subscribe({
      next: (Response:Proyectos[]) => {
        this.proyectos = Response;
    },
    error: (error:HttpErrorResponse) => {
      alert(error.message);
    }
  })
  }
  deleteProyectos(id?: number) {
    if (id != undefined){
      this.proyectosService.deleteProyectos(id).subscribe(
        data => {
          this.getProyectos();
        }, err => {
          alert ("No se pudo borrar el proyecto");
        }
      )
    }
  }

}
