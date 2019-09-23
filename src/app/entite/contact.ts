import { Fonction } from './fonction';
import { Personne } from './personne';

export class Contact {
    public constructor (
        public id: number, 
        public fonction: Fonction, 
        public personne: Personne) {}

}