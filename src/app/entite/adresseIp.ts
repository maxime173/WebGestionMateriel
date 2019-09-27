import { TypeAffectation } from './typeAffectation';

export class AdresseIp {
    public constructor (public ipv4: string, 
        public masque: string, 
        public typeAffectation : TypeAffectation) {}

    public ipv6: string;
    public id: number;
}