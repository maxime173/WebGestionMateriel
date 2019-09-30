import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../entite/contact';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends GenericService {

  getContactsFromClient(idClient:number): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl + '/clients/' + idClient + '/contacts', this.httpOptions);
  }

  getContactByIdFromClient(idClient:number, id:number): Observable<Contact> {
    return this.http.get<Contact>(this.baseUrl + '/clients/' + idClient + '/contacts/' + id, this.httpOptions);
  }

  createContact(idClient: number, c: Contact) : Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl + '/clients/' + idClient + '/contacts', c, this.httpOptions);
  }

  editContact(idClient: number, c: Contact) : Observable<Contact> {
    return this.http.put<Contact>(this.baseUrl + '/clients/' + idClient + '/contacts/' + c.id, c, this.httpOptions);
  }

  deleteContact(idClient:number, id:number): Observable<Contact> {
    return this.http.delete<Contact>(this.baseUrl + '/clients/' + idClient + '/contacts/' + id, this.httpOptions);
  } 
  
}
