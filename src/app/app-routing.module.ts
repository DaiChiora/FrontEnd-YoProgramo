import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/experiencia-y-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/experiencia-y-educacion/edit-educacion.component';
import { NewSkillComponent } from './components/porcentajes/new-skill.component';
import { EditSkillComponent } from './components/porcentajes/edit-skill.component';
import { EditUsuarioComponent } from './components/acerca-de/edit-usuario.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'new-experiencia', component: NewExperienciaComponent},
  {path: 'edit-experiencia/:idExp', component: EditExperienciaComponent},
  {path: 'new-educacion', component: NewEducacionComponent},
  {path: 'edit-educacion/:idEdu', component: EditEducacionComponent},
  {path: 'new-skill', component: NewSkillComponent},
  {path: 'edit-skill/:id', component: EditSkillComponent},
  {path: 'edit-usuario/:id', component: EditUsuarioComponent},
  {path: 'editar-proyecto/:id', component: EditarProyectoComponent},
  {path: 'new-proyecto', component: NewProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
