import { Ville } from './ville';
import { Contact } from './contact';
import { Materiel } from './materiel';

export class Client {
    public constructor (
        public id: number, 
        public nom: string, 
        public adresse1: string, 
        public adresse2: string, 
        public ville : Ville,
        public contact: Array<Contact>,
        public materiel: Array<Materiel>) {}

    public static fromJson(json: Object): 
    Client {
        return new Client(
            json['id'], 
            json['nom'],
            json['adresse1'],
            json['adresse2'],
            json['ville'],
            json['contacts'],
            json['materiels']
        );
    }
    }
