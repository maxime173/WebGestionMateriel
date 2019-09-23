import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../entite/contact';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends GenericService {

  // Retourne tous les contacts
  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl+'/contacts', this.httpOptions).pipe();
  }

  getContactsFromClient(idClient:number): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl + '/clients/' + idClient + '/contacts', this.httpOptions).pipe();
  }

  getContactByIdFromClient(idClient:number, id:number): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl + '/clients/' + idClient + '/contacts/' + id, this.httpOptions).pipe();
  }

  deleteContactById(idClient:number, id:number): Observable<Contact> {
    return this.http.delete<Contact>(this.baseUrl + '/clients/' + idClient + '/contacts/' + id, this.httpOptions).pipe();
  } 
  
}
