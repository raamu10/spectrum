import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
		path: '',
		loadChildren: './layout/layout.module#LayoutModule',
		data: {
			title: ''
		}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
