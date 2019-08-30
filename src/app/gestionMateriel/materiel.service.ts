import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiel } from './materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  baseUrl = "https://api-gestion-materiel.herokuapp.com/api/v1";
  httpOptions = {
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Accept':'application/json',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getMaterielsFromClient(idClient:number): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(this.baseUrl + '/clients/' + idClient + '/materiels', this.httpOptions).pipe();
  }

  getMaterielByIdFromClient(idClient:number, idMateriel:number): Observable<Materiel> {
    return this.http.get<Materiel>(this.baseUrl + '/clients/' + idClient + '/materiels/' + idMateriel, this.httpOptions).pipe();
  }

  getMaterielById(idMateriel:number): Observable<Materiel> {
    return this.http.get<Materiel>(this.baseUrl + '/materiels/' + idMateriel, this.httpOptions).pipe();
  }
}
