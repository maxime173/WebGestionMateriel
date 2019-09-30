import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../entite/client';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends GenericService {
  
  getClientById(idClient: number): Observable<Client> {
    return this.http.get<Client>(this.baseUrl + '/clients/' + idClient, this.httpOptions);
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl+'/clients', this.httpOptions);
  }

  createClient(client:Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl+'/clients', client, this.httpOptions);
  }

  editClient(c: Client) : Observable<Client> {
    return this.http.put<Client>(this.baseUrl + '/clients/' + c.id, c, this.httpOptions);
  }

  deleteClient(idClient: number): Observable<Client> {
    return this.http.delete<Client>(this.baseUrl + '/clients/' + idClient, this.httpOptions);
  }
  
}