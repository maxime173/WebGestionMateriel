import { Injectable } from '@angular/core';
import { TypeAffectation } from '../entite/typeAffectation';
import { Observable } from 'rxjs/internal/Observable';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class TypeAffectationService extends GenericService {

  getAllTypeAffectations(): Observable<TypeAffectation[]> {
    return this.http.get<TypeAffectation[]>(this.baseUrl + '/typeaffectations', this.httpOptions);
  }
}
