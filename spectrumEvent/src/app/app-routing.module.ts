import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent, SmallLayoutComponent } from './layout';

const routes: Routes = [
	{
		path: '',
		//component: LandingComponent,
		loadChildren: './landing/landing.module#LandingModule', 
		data: {
		  title: 'Home'
		},
	  },
	  {
		path: 'fullLayout',
		component: FullLayoutComponent,
		data: {
		  title: 'Full Comp'
		}
	  },
	  {
		path: 'smallLayout',
		component: SmallLayoutComponent,
		data: {
		  title: 'Small Comp'
		}
	  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
