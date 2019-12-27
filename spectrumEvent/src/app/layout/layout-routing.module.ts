import { NgModule } from '@angular/core'
import { Routes, RouterModule  } from '@angular/router'

import { LayoutComponent } from './layout.component';

const route: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{
            path: 'members',
            loadChildren: '../members/members.module#MembersModule'
        }, {
            path: 'events',
            loadChildren: '../events/events.module#EventsModule'
        }],
        data: {
            title: 'Layout'
        }

    }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]

})

export class LayoutRouting {}