import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Fonction } from '../entite/fonction';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FonctionService extends GenericService {

  getAllFonctions(): Observable<Fonction[]> {
    return this.http.get<Fonction[]>(this.baseUrl + '/fonctions', this.httpOptions);
  }
}
