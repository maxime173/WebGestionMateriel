import { TypeInterface } from './typeInterface';
import { AdresseIp } from './adresseIp';

export class Interface {
    public constructor (
        public id: number, 
        public nom: string,
        public mac: string,
        public typeInterface:TypeInterface ,
        public adresseIp: AdresseIp ) {}

    public static fromJson(json: Object): 
    Interface {
        return new Interface(
            json['id'], 
            json['nom'],
            json['mac'],
            json['typeif'],
            json['adresse'],
        );
    }
    }