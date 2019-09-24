import { TypeMateriel } from './typeMateriel';
import { Interface } from './interface';
import { Incident } from './incident';

export class Materiel {
    public constructor (
        public libelle: string, 
        public numSerie: string, 
        public typeMateriel: TypeMateriel) {}

    id: number;
    interfaces: Array<Interface>;
    incidents: Array<Incident>;

}
