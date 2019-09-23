import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../entite/client';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends GenericService {
  
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