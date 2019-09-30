import { Injectable } from '@angular/core';
import { Ville } from '../entite/ville';
import { Observable } from 'rxjs';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class VilleService extends GenericService {
  
  getAllVilles(): Observable<Ville[]> {
    return this.http.get<Ville[]>(this.baseUrl + '/villes', this.httpOptions);
  }
  
}