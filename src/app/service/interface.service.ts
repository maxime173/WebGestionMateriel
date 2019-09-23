import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Interface } from '../entite/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {
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

  getInterfacesFromMateriel(idMateriel:number): Observable<Interface[]> {
    return this.http.get<Interface[]>(this.baseUrl + '/materiels/' + idMateriel + '/interfaces', this.httpOptions).pipe();
  }
}
