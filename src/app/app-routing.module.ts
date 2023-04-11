import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/experiencia-y-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/experiencia-y-educacion/edit-educacion.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'new-experiencia', component: NewExperienciaComponent},
  {path: 'edit-experiencia/:idExp', component: EditExperienciaComponent},
  {path: 'new-educacion', component: NewEducacionComponent},
  {path: 'edit-educacion/:idEdu', component: EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
