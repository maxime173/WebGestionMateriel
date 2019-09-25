import { Injectable } from '@angular/core';
import { Incident } from '../entite/incident';
import { Observable } from 'rxjs';
import { GenericService } from './generic.service';
import { HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentService extends GenericService {

  getIncidentsFromMateriel(idMateriel:number): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.baseUrl + '/materiels/' + idMateriel + '/incidents', this.httpOptions).pipe();
  }

  exportIncidentFromClient(idClient:number, dateDebut:Date, dateFin:Date) : Observable<Blob>{
    let options = {
      headers: {
        'Accept':'application/pdf'
      },
      params: {
        'dateDebut':dateDebut.toString(),
        'dateFin':dateFin.toString()
      },
      responseType: 'blob' as 'json'
    };
    
    return this.http.get<Blob>(this.baseUrl + '/clients/' + idClient + '/incidents', options).pipe();
  }
}
