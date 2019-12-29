import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-landing',
    templateUrl: 'landing.component.html'
})

export class LandingComponent implements OnInit {

    public isLogin = true;

    constructor () {

    }

    ngOnInit() {

        localStorage.removeItem('addedEvent');
        
    }
}