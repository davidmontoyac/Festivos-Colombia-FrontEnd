import { Component, ViewChild } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { MatDatepicker, MatDatepickerInput } from '@angular/material/datepicker';
import { FestivosService } from '../../servicios/festivos.service';
import { DateAdapter } from '@angular/material/core';

/**
 * @author Pedro Arango Sánchez
 * @author David Andrés Montoya Castaño
 * Universidad de Antioquia
 * Técnicas de Programación y Laboratorio [2554307] 
 * Grupo: 01 | Semestre: 2024-1
 */

@Component({
  selector: 'app-verificar-festivos',
  standalone: true,
  imports: [ReferenciasMaterialModule],
  templateUrl: './verificar-festivos.component.html',
  styleUrl: './verificar-festivos.component.css'
})
export class VerificarFestivosComponent {

  @ViewChild(MatDatepickerInput) datepickerInput: MatDatepickerInput<Date> | undefined;

  constructor(private servicio: FestivosService,private adapter: DateAdapter<Date>) { 
    this.verificarFestivo();
  }

  verificarFestivo(){
    if (this.datepickerInput) {
      const fecha = this.datepickerInput.value;
      if (fecha) {
        const año = this.adapter.getYear(fecha);
        const mes = this.adapter.getMonth(fecha) + 1;
        const dia = this.adapter.getDate(fecha);
  
        this.servicio.verificarFestivo(año, mes, dia).subscribe({
          next: response => {
            window.alert(response);
          },
          error: error => {
            window.alert("Error al verificar festivo");
          }
        });
      } else {
        window.alert("Fecha no ha sido seleccionada");
      }
    }
  }
  }
