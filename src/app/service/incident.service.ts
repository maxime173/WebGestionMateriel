import { Injectable } from '@angular/core';
import { Incident } from '../entite/incident';
import { Observable } from 'rxjs';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class IncidentService extends GenericService {

  getIncidentByIdFromMateriel(idMateriel:number, idIncident: number): Observable<Incident> {
    return this.http.get<Incident>(this.baseUrl + '/materiels/' + idMateriel + '/incidents/' + idIncident, this.httpOptions).pipe();
  }

  getIncidentsFromMateriel(idMateriel:number): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.baseUrl + '/materiels/' + idMateriel + '/incidents', this.httpOptions).pipe();
  }

  createIncident(idMateriel: number, incident: Incident) : Observable<Incident> {
    return this.http.post<Incident>(this.baseUrl + '/materiels/' + idMateriel + '/incidents', incident, this.httpOptions);
  }

  editIncident(idMateriel: number, incident: Incident) : Observable<Incident> {
    return this.http.put<Incident>(this.baseUrl + '/materiels/' + idMateriel + '/incidents/' + incident.id, incident, this.httpOptions);
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

  cloreIncidentFromMateriel(idMateriel:number, idIncident): Observable<Incident> {
    let uri: string = this.baseUrl + '/materiels/' + idMateriel + '/incidents/' + idIncident + '/clore';
    return this.http.put<Incident>(uri, null, this.httpOptions).pipe();
  }
}
