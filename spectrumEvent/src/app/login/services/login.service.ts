import { Injectable } from '@angular/core';

import { LoginDataService } from './loginData.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoginService {

    constructor ( private loginDataService : LoginDataService, private toaster: ToastrService,
        private router: Router) {

    }

    /**
     * @name loginUser
     * @param userData {Object}
     * @description
     * Login User
     */
    loginUser(userData) {
        this.router.navigate(['/members']);
        /* this.loginDataService.loginUser(userData).subscribe( resp => {
            //this.router.navigate(['/users']);
            
        }, error => {
            this.toaster.error(error.error.error);
        }); */
    }

}