import { GeoLocation } from './geo-location.model';

export class Address {
    street : string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLocation;
}
