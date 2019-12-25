import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { RegisterService } from './services/register.service';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {

    public email = new FormControl('', [Validators.required, Validators.email]);
    public password = new FormControl('', [Validators.required]);

    constructor (private registerService : RegisterService) {

    }

    ngOnInit() {
        
    }

    getEmailErrorMsg() {
        return this.email.hasError('required') ? 'You must enter the email id' :
        this.email.hasError('email') ? 'Not a valid email' : '';
    }

    getPwdErrorMsg () {
        return this.password.hasError('required') ? 'You must enter the password' : '';
    }


    registerUser() {
        var newUser = {
            email: this.email.value,
            password: this.password.value
        };

        this.registerService.registerNewUser(newUser);
    }
}