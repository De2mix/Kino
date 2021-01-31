import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { StartPageComponent } from './start-page/start-page.component';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { PriceListComponent } from './price-list/price-list.component';
import { InfoComponent } from './info/info.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SalaComponent } from './sala/sala.component';

import { HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { userService } from './services/user.service';
import { rezrwacjaService } from './services/rezerwacja.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    StartPageComponent,
    RepertoireComponent,
    PriceListComponent,
    InfoComponent,
    RegulationsComponent,
    LoginComponent,
    RegisterComponent,
    SalaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [userService, 
        rezrwacjaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
