import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
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
  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl+'/contacts', this.httpOptions).pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => Contact.fromJson(jsonItem))
      )
    );
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
