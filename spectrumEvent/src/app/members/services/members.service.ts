import { Injectable  } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import RxJs required methods
import 'rxjs/Rx';

@Injectable()
export class MembersService {

    public BASE_URL = 'https://next.json-generator.com' 

    constructor ( private http: HttpClient) {

    }

    getAllMembers() {

        var url = this.BASE_URL + '/api/json/get/NyNrlJTX8';

        return this.http.get(url)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => Observable.throw(error || JSON.parse(error._body)));

    } 



}