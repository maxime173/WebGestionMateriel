import { Ville } from './ville';
import { Contact } from './contact';
import { Materiel } from './materiel';

export class Client {
    public constructor ( 
        public nom: string, 
        public adresse1: string, 
        public adresse2: string, 
        public ville : Ville) {}

    public id: number;
    public contacts: Array<Contact>;
    public materiels: Array<Materiel>;
}
