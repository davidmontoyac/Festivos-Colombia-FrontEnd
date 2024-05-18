/**
 * @author Pedro Arango Sánchez
 * @author David Andrés Montoya Castaño
 * Universidad de Antioquia
 * Técnicas de Programación y Laboratorio [2554307] 
 * Grupo: 01 | Semestre: 2024-1
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReferenciasMaterialModule } from './shared/modulos/referencias-material.module';
import { VerificarFestivosComponent } from './features/componentes/verificar-festivos/verificar-festivos.component';
import { ObtenerFestivosComponent } from './features/componentes/obtener-festivos/obtener-festivos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    ReferenciasMaterialModule,
    VerificarFestivosComponent,
    ObtenerFestivosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FestivosColombia';
}
