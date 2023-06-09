import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from 'src/app/model/usuario.model';
import { ImageService } from 'src/app/service/image.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit{
  usuario: usuario = null;

  constructor(private activatedRouter: ActivatedRoute, private usuarioService: UsuarioService, private router: Router, public imageService: ImageService){}
  
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.usuarioService.detail(id).subscribe(data => {
      this.usuario= data;
    }, err => {
      alert("Error al modificar usuario");
      this.router.navigate(['']);
    })
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.usuario.img = this.imageService.url
    this.usuarioService.updateUsuario(id, this.usuario).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar usuario");
      this.router.navigate(['']);
    })
  }

  uploadImg($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
  this.imageService.uploadImg($event, name)
} 
}
