import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';

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
        SharedModule    
    ],
    providers: [
        MembersService
    ]
})

export class MembersModule {}