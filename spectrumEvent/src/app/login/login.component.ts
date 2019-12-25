import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { LoginService } from './services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    public email = new FormControl('', [Validators.required, Validators.email]);
    public password = new FormControl('', [Validators.required]);

    constructor (private loginService : LoginService) {

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


    login() {
        var newUser = {
            email: this.email.value,
            password: this.password.value
        };

        this.loginService.loginUser(newUser);
    }
}