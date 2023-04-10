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
  public detail(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.expURL+ `detail/${id}`)
  }

  public addExperiencia(experiencia:Experiencia): Observable<any>{
    return this.http.post<any>(this.expURL+ 'add',experiencia)
  }
  public updateExperiencia(id: number, experiencia:Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(this.expURL+ `update/${id}`,experiencia)
  }
  public deleteExperiencia(idExp:number): Observable<void>{
    return this.http.delete<void>(this.expURL+ `delete/${idExp}`)
  }


}


