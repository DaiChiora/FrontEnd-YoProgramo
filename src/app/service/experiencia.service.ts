import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  lista() {
    throw new Error('Method not implemented.');
  }
  expURL = 'http://localhost:8080/experiencia/';
  

  constructor(private http: HttpClient) {}

  public getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.expURL+ 'all');
  }

  public addExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(this.expURL+ 'add',experiencia)
  }
  public updateExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(this.expURL+ 'update',experiencia)
  }
  public deleteExperiencia(experienciaId:number): Observable<void>{
    return this.http.delete<void>(this.expURL+ `delete/${experienciaId}`)
  }

 

 
}


