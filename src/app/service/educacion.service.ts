import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  eduURL = 'http://localhost:8080/educacion/';
  

  constructor(private http: HttpClient) {}

  public getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.eduURL+ 'all');
  }
  public detail(idEdu: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.eduURL+ `detail/${idEdu}`)
  }
  public addEducacion(educacion:Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(this.eduURL+ 'add',educacion)
  }
  public updateEducacion(idEdu:number, educacion:Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(this.eduURL+ `update/${idEdu}`,educacion)
  }
  public deleteEducacion(idEdu:number): Observable<void>{
    return this.http.delete<void>(this.eduURL+ `delete/${idEdu}`)
  }




} 
