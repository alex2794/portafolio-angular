import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {PortafolioComponent} from './pages/portafolio/portafolio.component';
import {AboutComponent} from './pages/about/about.component';
import {ItempComponent} from './pages/itemp/itemp.component';



const approutes: Routes = [
    {path: 'home', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'itemp', component: ItempComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];


@NgModule({
    imports: [
        RouterModule.forRoot( approutes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }



