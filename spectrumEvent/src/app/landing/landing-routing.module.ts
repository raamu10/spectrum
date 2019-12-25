import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';

const route: Routes = [
    {
        path: '',
        component: LandingComponent,
        data: {
            title: 'landing comp'
        }

    }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class LandingRouteModule {}