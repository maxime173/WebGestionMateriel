import { TypeMateriel } from './typeMateriel';
import { Interface } from './interface';

export class Materiel {
    public constructor (
        public libelle: string, 
        public numSerie: string, 
        public typeMateriel: TypeMateriel) {}

    id: number;
    interf: Array<Interface>;

}
