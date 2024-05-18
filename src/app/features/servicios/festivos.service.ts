import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Festivo } from '../../core/entidades/Festivo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @author Pedro Arango Sánchez
 * @author David Andrés Montoya Castaño
 * Universidad de Antioquia
 * Técnicas de Programación y Laboratorio [2554307] 
 * Grupo: 01 | Semestre: 2024-1
 */

@Injectable({
  providedIn: 'root'
})
export class FestivosService {

  public url:string;

  constructor(private http: HttpClient) { 
    this.url = `${environment.urlBase}`;
  }

  public listarFestivosAño(año:number): Observable<Festivo[]>{
    return this.http.get<Festivo[]>(`${this.url}/obtener/${año}`);
  }

  public verificarFestivo(año:number,mes:number,dia:number): Observable<String>{
    return this.http.get(`${this.url}/verificar/${año}/${mes}/${dia}`, {responseType: 'text'});
  }
}
