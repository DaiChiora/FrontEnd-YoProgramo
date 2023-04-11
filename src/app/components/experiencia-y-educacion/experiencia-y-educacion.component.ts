import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
isLogged:boolean = false;
educaciones: Educacion[]=[]; 

constructor(private tokenService: TokenService, private educacionService: EducacionService) {  }

ngOnInit(): void {
  this.getEducacion();
  if(this.tokenService.getToken()){
    this.isLogged = true;
  }else{
    this.isLogged = false;
  }
}
public getEducacion():void {
  this.educacionService.getEducacion().subscribe({
    next: (Response:Educacion[]) => {
      this.educaciones = Response;
  },
  error: (error:HttpErrorResponse) => {
    alert(error.message);
  }
})
}
deleteEducacion(idEdu?: number) {
  if (idEdu != undefined){
    this.educacionService.deleteEducacion(idEdu).subscribe(
      data => {
        this.getEducacion();
      }, err => {
        alert ("No se pudo borrar la educación");
      }
    )
  }
}


}