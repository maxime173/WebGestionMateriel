import { Injectable } from '@angular/core';
import { TypeMateriel } from '../entite/typeMateriel';
import { Observable } from 'rxjs/internal/Observable';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class TypeMaterielService extends GenericService {

  getAllTypeMateriels(): Observable<TypeMateriel[]> {
    return this.http.get<TypeMateriel[]>(this.baseUrl + '/typemateriels', this.httpOptions).pipe();
  }
}
