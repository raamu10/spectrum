import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { FullLayoutComponent } from './fullLayout/fullLayout.component';
import { LayoutRouting } from './layout-routing.module';

@NgModule({
    declarations: [
        LayoutComponent,
        FullLayoutComponent
    ],
    imports: [
        LayoutRouting
    ]

})

export class LayoutModule {}