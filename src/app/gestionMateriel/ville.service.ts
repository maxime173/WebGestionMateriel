import { Injectable } from '@angular/core';
import { Ville } from './ville';
//import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

/*@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor() { }
}*/

@Injectable({
  providedIn: 'root'
})
export class VilleService {
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

  // Retourne tous les contacts
  getAllVilles(): Observable<Ville[]> {
    return this.http.get<Ville[]>(this.baseUrl+'/villes', this.httpOptions).pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => Ville.fromJson(jsonItem))
      )
    );
  }
  
}