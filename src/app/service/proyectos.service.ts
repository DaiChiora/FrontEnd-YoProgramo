import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url = environment.URL + 'proyectos/'

  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.url + 'all');
  }
  public detail(id: number): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url+ `detail/${id}`)
  }
  public addProyectos(proyectos:Proyectos): Observable<Proyectos>{
    return this.http.post<Proyectos>(this.url+ 'add',proyectos)
  }
  public updateProyectos(id:number, proyectos:Proyectos): Observable<Proyectos>{
    return this.http.put<Proyectos>(this.url+ `update/${id}`,proyectos)
  }
  public deleteProyectos(id:number): Observable<void>{
    return this.http.delete<void>(this.url+ `delete/${id}`)
  }
}
