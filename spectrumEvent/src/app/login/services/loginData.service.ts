import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

// Import RxJs required methods
import 'rxjs/Rx';

@Injectable()
export class LoginDataService {

    private BASE_URL = environment.API_URL;

    constructor ( private http: HttpClient) {

    }

    /**
     * @name loginUser
     * @param userData {Object}
     * @description
     * Login User
     */
    loginUser(userData) : Observable<any> {
        var url = this.BASE_URL + '/api/login';

        return this.http.post(url, userData)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => Observable.throw(error || JSON.parse(error._body)));
    }

}