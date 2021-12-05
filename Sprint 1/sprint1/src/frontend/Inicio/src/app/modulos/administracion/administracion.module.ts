import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AdministracionRoutingModule} from './administracion-routing.module';
import {BuscarEmpleadoComponent} from './empleados/buscar-empleado/buscar-empleado.component';
import {CrearEmpleadoComponent} from './empleados/crear-empleado/crear-empleado.component';
import {EditarEmpleadoComponent} from './empleados/editar-empleado/editar-empleado.component';
import {EliminarEmpleadoComponent} from './empleados/eliminar-empleado/eliminar-empleado.component';
import {BuscarEmpresaComponent} from './empresas/buscar-empresa/buscar-empresa.component';
import {CrearEmpresaComponent} from './empresas/crear-empresa/crear-empresa.component';
import {EditarEmpresaComponent} from './empresas/editar-empresa/editar-empresa.component';
import {EliminarEmpresaComponent} from './empresas/eliminar-empresa/eliminar-empresa.component';
import {BuscarPersonaComponent} from './personas/buscar-persona/buscar-persona.component';
import {CrearPersonaComponent} from './personas/crear-persona/crear-persona.component';
import {EditarPersonaComponent} from './personas/editar-persona/editar-persona.component';
import {EliminarPersonaComponent} from './personas/eliminar-persona/eliminar-persona.component';



@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    EliminarEmpleadoComponent,
    BuscarEmpleadoComponent,
    CrearEmpresaComponent,
    EditarEmpresaComponent,
    EliminarEmpresaComponent,
    BuscarEmpresaComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
