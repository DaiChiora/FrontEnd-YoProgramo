import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../model/usuario.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
    URL = environment.URL + 'usuario/';

  constructor(private http: HttpClient) { }

  public getUsuario(): Observable<usuario[]>{
    return this.http.get<usuario[]>(this.URL+ 'all');
  }
  public detail(id: number): Observable<usuario>{
    return this.http.get<usuario>(this.URL+ `detail/${id}`)
  }
  public addUsuario(usuario: usuario): Observable<usuario>{
    return this.http.post<usuario>(this.URL+ 'add',usuario)
  }
  public updateUsuario(id:number, usuario:usuario): Observable<usuario>{
    return this.http.put<usuario>(this.URL+ `update/${id}`,usuario)
  }
  public deleteUsuario(id:number): Observable<void>{
    return this.http.delete<void>(this.URL+ `delete/${id}`)
  }

}