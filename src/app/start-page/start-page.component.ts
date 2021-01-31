import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rezerwacja } from '../classes/rezerwacja';
import { rezrwacjaService } from '../services/rezerwacja.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor (private _rezrwacjaService: rezrwacjaService, private http: HttpClient){}
  rezerwacja: Rezerwacja[] = [];

  rezerwacjaDelete =  {
    miejsce: 2,
    usernameID: 1 
};


  delete () {
    this.http.delete('http://localhost:8083/api/removeRezerwacja/8')

     window.location.reload();
     
    
  }



  ngOnInit(){
    this._rezrwacjaService.getRezerwacja().subscribe(
      data =>{
          this.rezerwacja = data;
      }
    )
  }

}
