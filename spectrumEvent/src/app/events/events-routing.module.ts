import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';


const route: Routes = [{
    path: '',
    component: EventsComponent,
    data: {
        title: 'Events'
    }
}];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class EventsRoutingModule {}