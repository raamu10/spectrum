import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'

import { LayoutComponent } from './layout.component';
import { FullLayoutComponent } from './fullLayout/fullLayout.component';
import { LayoutRouting } from './layout-routing.module';

import { LoaderComponent } from '../shared/loader/component/loader.component';
import { LoaderService } from '../shared/loader/loader.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LayoutComponent,
        FullLayoutComponent,
        LoaderComponent
    ],
    imports: [
        LayoutRouting,
        CommonModule,
        SharedModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        LoaderService
    ]

})

export class LayoutModule {}