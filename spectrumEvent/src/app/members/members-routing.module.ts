import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members.component';

const route: Routes = [
    {
        path: '',
        component: MembersComponent,
        data: {
            title: 'Members'
        }

    }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class MembersRouteModule {}