import { Injectable } from '@angular/core';
import { TypeInterface } from '../entite/typeInterface';
import { Observable } from 'rxjs/internal/Observable';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class TypeInterfaceService extends GenericService {
  getAllTypeInterfaces(): Observable<TypeInterface[]> {
    return this.http.get<TypeInterface[]>(this.baseUrl + '/typesinterfaces', this.httpOptions).pipe();
  }
}
