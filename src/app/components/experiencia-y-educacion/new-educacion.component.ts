import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  tituloEdu: string = '';
  fechaEdu: string = '';
  descEdu: string = '';
  imgEdu: string = '';

  constructor(private educacionService: EducacionService, private router: Router){}

  
  
  ngOnInit(): void {

  }

  onCreate(): void {
    const edu = new Educacion (this.tituloEdu, this.fechaEdu, this.descEdu, this.imgEdu);
    this.educacionService.addEducacion(edu).subscribe({
      next:(data) => {
      alert("Educación añadida");
      this.router.navigate(['']);
    },
     error:(err) => {
      alert("Falló");
      this.router.navigate(['']);
    }
    
  });

}}
