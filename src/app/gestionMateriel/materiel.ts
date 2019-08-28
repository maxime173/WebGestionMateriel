import { TypeMateriel } from './typeMateriel';
import { Interface } from './interface';

export class Materiel {
    public constructor (
        public id: number, 
        public libelle: string, 
        public numserie: string, 
        public typeMateriel: TypeMateriel, 
        public interf: Array<Interface>) {}

    public static fromJson(json: Object): 
    Materiel {
        return new Materiel(
            json['id'], 
            json['libelle'],
            json['numSerie'],
            json['typeMateriel'],
            json['interfaces']
        );
    }
    }
