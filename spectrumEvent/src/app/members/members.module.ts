import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

import { MembersComponent } from './members.component';
import { MembersService } from './services/members.service';
import { MembersRouteModule } from './members-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations: [
        MembersComponent,
    ],
    imports: [
        CommonModule,
        DataTablesModule,
        MembersRouteModule,
        SharedModule,
        NgbModule,
        NgMultiSelectDropDownModule
    ],
    providers: [
        MembersService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class MembersModule {}