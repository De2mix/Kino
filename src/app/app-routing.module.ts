import { ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { PriceListComponent } from './price-list/price-list.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { SalaComponent } from './sala/sala.component';
import { StartPageComponent } from './start-page/start-page.component';


const routes: Routes = [
  { path: 'home', component: StartPageComponent },
  { path: 'repertoire', component: RepertoireComponent},
  { path: 'price-list', component: PriceListComponent},
  { path: 'regularions', component: RegulationsComponent},
  { path: 'info', component: InfoComponent},
  { path: 'reservation', component: SalaComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: StartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
