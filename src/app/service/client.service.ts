import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Client } from '../entite/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
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
  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl+'/clients', this.httpOptions).pipe();
  }

  createClient(client:Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl+'/clients', client, this.httpOptions).pipe();
  }

  getClientById(idClient: number): Observable<Client> {
    return this.http.get<Client>(this.baseUrl + '/clients/' + idClient, this.httpOptions).pipe();
  }
  
}