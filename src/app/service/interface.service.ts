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

  getInterfaceByIdFromMateriel(idMateriel:number, idInterface: number): Observable<Interface> {
    return this.http.get<Interface>(this.baseUrl + '/materiels/' + idMateriel + '/interfaces/' + idInterface, this.httpOptions).pipe();
  }

  createInterface(idMateriel: number, i: Interface) : Observable<Interface> {
    return this.http.post<Interface>(this.baseUrl + '/materiels/' + idMateriel + '/interfaces', i, this.httpOptions);
  }

  editInterface(idMateriel: number, i: Interface) : Observable<Interface> {
    return this.http.put<Interface>(this.baseUrl + '/materiels/' + idMateriel + '/interfaces/' + i.id, i, this.httpOptions);
  }

  deleteInterface(idMateriel: number, idInterface: number): Observable<Interface> {
    return this.http.delete<Interface>(this.baseUrl + '/materiels/' + idMateriel + '/interfaces/' + idInterface, this.httpOptions);
  }
}
