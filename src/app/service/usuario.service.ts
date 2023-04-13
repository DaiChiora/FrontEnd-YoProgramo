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

  public getUser(): Observable<usuario>{
    return this.http.get<usuario>(this.URL+ 'all');
  }
}