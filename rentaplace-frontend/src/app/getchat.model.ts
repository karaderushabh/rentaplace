import { Timestamp } from 'rxjs';

export class GetChat {
  constructor(
    public message: string,
    public sendername: string,
    public recievername: string,
    public createdDate: Date
  ) {}
}
