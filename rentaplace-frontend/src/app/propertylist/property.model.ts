import { Owner } from '../owner.model';

export class Property {
  constructor(
    public hid: number,
    public propertytype: string,
    public address: string,
    public features: string,
    public rentpricepermonth: string,
    public isreserved: number,
    public owner: Owner
  ) {}
}
