import { Property } from '../propertylist/property.model';
import { User } from '../service/user.model';

export class GetBooking {
  constructor(
    public bookingid: number,
    public checkin: string,
    public checkout: string,
    public isconfirmbyowner: number,
    public user: User,
    public home: Property
  ) {}
}
