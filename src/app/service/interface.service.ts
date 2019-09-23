import { Injectable } from '@angular/core';
import { Interface } from '../entite/interface';
import { Observable } from 'rxjs';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService extends GenericService {
  
  getInterfacesFromMateriel(idMateriel:number): Observable<Interface[]> {
    return this.http.get<Interface[]>(this.baseUrl + '/materiels/' + idMateriel + '/interfaces', this.httpOptions).pipe();
  }
}
