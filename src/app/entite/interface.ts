import { TypeInterface } from './typeInterface';
import { AdresseIp } from './adresseIp';

export class Interface {
    public constructor (
        public id: number, 
        public nom: string,
        public mac: string,
        public typeif:TypeInterface,
        public adresseIp: AdresseIp ) {}
    }