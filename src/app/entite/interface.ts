import { TypeInterface } from './typeInterface';
import { AdresseIp } from './adresseIp';

export class Interface {

    public constructor(public nom: string, public typeif:TypeInterface) {}

    public id: number;
    public mac: string;
    public adresse: AdresseIp;
}