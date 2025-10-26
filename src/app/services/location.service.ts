import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Region, Comuna } from '../models/location.model';  

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://localhost:3000/api';  

  constructor(private http: HttpClient) {}

  getRegions(): Observable<Region[]> {
    return this.http.get<any[]> (`${this.apiUrl}/regiones`).pipe(
      map(data => data.map(r => ({ id: r.id, name: r.nombre }))) 
    );
  }

  getComunas(regionId: number): Observable<Comuna[]> {
    return this.http.get<any[]>(`${this.apiUrl}/comunas/${regionId}`).pipe(
      map(data => data.map(c => ({ id: c.id, name: c.nombre })))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error en LocationService:', error);
    return throwError(() => new Error('Error al cargar datos de ubicación. Inténtalo de nuevo.'));
  }
}