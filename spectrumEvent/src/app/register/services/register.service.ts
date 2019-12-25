import { Injectable } from '@angular/core';

import { RegisterDataService } from './registerData.service';

import { ToastrService } from 'ngx-toastr';


@Injectable()
export class RegisterService {

    constructor ( private registerDataService : RegisterDataService, private toaster: ToastrService) {

    }

    /**
     * @name registerNewUser
     * @param userData {Object}
     * @description
     * Register New User
     */
    registerNewUser(userData) {
        this.registerDataService.registerUser(userData).subscribe( resp => {
            this.toaster.success("User Registerd Successfully");
        }, error => {
            this.toaster.error(error.error.error);
        });
    }

}