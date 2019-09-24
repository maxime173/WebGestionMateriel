import { Injectable } from '@angular/core';
import { Incident } from '../entite/incident';
import { Observable } from 'rxjs';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class IncidentService extends GenericService {

  getIncidentsFromMateriel(idMateriel:number): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.baseUrl + '/materiels/' + idMateriel + '/incidents', this.httpOptions).pipe();
  }
}
