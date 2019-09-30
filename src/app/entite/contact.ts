import { Fonction } from './fonction';
import { Personne } from './personne';

export class Contact {
    public constructor (
        public fonction: Fonction, 
        public personne: Personne) {}
    
    public id: number;

}