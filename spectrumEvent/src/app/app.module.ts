import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingModule } from './landing/landing.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

import { FullLayoutComponent, SmallLayoutComponent } from './layout';
const CONTAINERS = [FullLayoutComponent, SmallLayoutComponent];

/* import { LoaderComponent } from './shared/loader/component/loader.component';
import { LoaderService } from './shared/loader/loader.service'; */

@NgModule({
    declarations: [
        AppComponent,
       // ...CONTAINERS,
       //LoaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        //LandingModule,
        SharedModule,
        ToastrModule.forRoot()
    ],
    providers: [
        //LoaderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
