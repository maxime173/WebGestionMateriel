import { TypeAffectation } from './typeAffectation';

export class AdresseIp {
    public constructor (
        public id: number, 
        public ipV4: string, 
        public ipV6: string, 
        public masque: string, 
        public typeAffectation : TypeAffectation  ) {}

    public static fromJson(json: Object): 
    AdresseIp {
        return new AdresseIp(
            json['id'], 
            json['ipV4'],
            json['ipV6'],
            json['masque'],
            json['typeAffectation']
        );
    }
    }