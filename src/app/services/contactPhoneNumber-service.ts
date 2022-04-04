import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhoneApi } from '../interface/contact-phone-number/api/PhoneApi';
import { Phone } from '../interface/contact-phone-number/model/Phone';

@Injectable()
export class ContactPhoneNumberService {

    constructor(private http: HttpClient,private contactPhoneNumberApi: PhoneApi) {}

    public getContactPhoneNumberList(countryCode, state): Observable<Phone[]> {
        return this.contactPhoneNumberApi.getPhoneNumbers(
          'Jumia',
          'UI',
          countryCode,
          state
        );
      }
}
