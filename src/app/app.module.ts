import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './components/experiencia-y-educacion/experiencia-y-educacion.component';
import { PorcentajesComponent } from './components/porcentajes/porcentajes.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/experiencia-y-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/experiencia-y-educacion/edit-educacion.component';
import { EditSkillComponent } from './components/porcentajes/edit-skill.component';
import { NewSkillComponent } from './components/porcentajes/new-skill.component';
import { EditUsuarioComponent } from './components/acerca-de/edit-usuario.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedesComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    PorcentajesComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditUsuarioComponent,
    NewProyectoComponent,
    EditarProyectoComponent,

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
   
  ],
  providers: [
    interceptorProvider,
    Storage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
