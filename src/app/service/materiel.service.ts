import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiel } from '../entite/materiel';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class MaterielService extends GenericService {

  getMaterielsFromClient(idClient:number): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(this.baseUrl + '/clients/' + idClient + '/materiels', this.httpOptions).pipe();
  }

  getMaterielByIdFromClient(idClient:number, idMateriel:number): Observable<Materiel> {
    console.log(this.baseUrl + '/clients/' + idClient + '/materiels/' + idMateriel);
    return this.http.get<Materiel>(this.baseUrl + '/clients/' + idClient + '/materiels/' + idMateriel, this.httpOptions).pipe();
  }

  getUrlQrCode(idClient:number, idMateriel:number): string {
    return this.baseUrl + "/clients/" + idClient + "/materiels/" + idMateriel + "/qrcode";
  }

  createMateriel(idClient:number, materiel:Materiel): Observable<Materiel> {
    return this.http.post<Materiel>(this.baseUrl + '/clients/' + idClient + '/materiels', materiel, this.httpOptions).pipe();
  }

  editMateriel(idClient: number, m: Materiel) : Observable<Materiel> {
    return this.http.put<Materiel>(this.baseUrl + '/clients/' + idClient + '/materiels/' + m.id, m, this.httpOptions);
  }

  deleteMateriel(idClient: number, idMateriel: number): Observable<Materiel> {
    return this.http.delete<Materiel>(this.baseUrl + '/clients/' + idClient + '/materiels/' + idMateriel, this.httpOptions);
  }
}
