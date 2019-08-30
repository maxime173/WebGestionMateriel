import { TypeMateriel } from './typeMateriel';
import { Interface } from './interface';

export class Materiel {
    public constructor (
        public libelle: string, 
        public numSerie: string, 
        public typeMateriel: TypeMateriel) {}

    id: number;
    interf: Array<Interface>;

    public static fromJson(json: Object): Materiel {
        let m = new Materiel(
            json['id'], 
            json['libelle'],
            json['numSerie']);
        m.typeMateriel = json['typeMateriel'];
        m.interf = json['interfaces'];
        return m;
    }
}
