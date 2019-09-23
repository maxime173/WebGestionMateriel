import { TypeAffectation } from './typeAffectation';

export class AdresseIp {
    public constructor (
        public id: number, 
        public ipv4: string, 
        public ipv6: string, 
        public masque: string, 
        public typeAffectation : TypeAffectation  ) {}

}