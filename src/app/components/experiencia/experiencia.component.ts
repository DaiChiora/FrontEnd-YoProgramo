import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit{
  isLogged:boolean = false;
  experiencias: Experiencia[]=[]; 
 
  constructor(private tokenService: TokenService, private experienciaService: ExperienciaService) {  }

  ngOnInit(): void {
    this.getExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  public getExperiencia():void {
    this.experienciaService.getExperiencia().subscribe({
      next: (Response:Experiencia[]) => {
        this.experiencias = Response;
    },
    error: (error:HttpErrorResponse) => {
      alert(error.message);
    }
  })
  }
 
}