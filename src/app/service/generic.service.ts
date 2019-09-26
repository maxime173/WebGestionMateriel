import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class GenericService {
    protected baseUrl = "https://api-gestion-materiel.herokuapp.com/api/v1";
    protected httpOptions = {
      headers : new HttpHeaders({
        'Accept':'application/json',
        'Content-Type': 'application/json'
      })
    };
    constructor(protected http: HttpClient) { }
  
}