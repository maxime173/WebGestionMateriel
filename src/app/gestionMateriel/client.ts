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

    public static fromJson(json: Object): 
    Client {
        let c: Client = new Client(
            json['nom'],
            json['adresse1'],
            json['adresse2'],
            json['ville']            
        );
        c.id = json['id'];
        c.contacts = json['contacts'];
        c.materiels = json['materiels'];
        return c;
    }
    
    }
