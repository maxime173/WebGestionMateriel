import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class GenericService {
    protected baseUrl = "https://api-gestion-materiel.herokuapp.com/api/v1";
    protected httpOptions = {
      headers : new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Accept':'application/json',
        'Content-Type': 'application/json'
      })
    };
    constructor(protected http: HttpClient) { }
  
}