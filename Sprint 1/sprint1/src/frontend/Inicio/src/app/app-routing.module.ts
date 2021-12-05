import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './plantilla/error/error.component';
import {HomeComponent} from './plantilla/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: "**",
    component: ErrorComponent
  },
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "admininistracion",
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
