import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rezerwacja } from '../classes/rezerwacja';
import { rezrwacjaService } from '../services/rezerwacja.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor (private _rezrwacjaService: rezrwacjaService, private http: HttpClient){}

  post () {
    this.http.post(this.url, this.rezerwacjaPost).toPromise().then(
      data => { console.log(data);}
      
    );
     window.location.reload();
  }
  
  
    rezerwacjaPost =  {
      miejsce: 2,
      usernameID: 1 
  };
  url = 'http://localhost:8083/api/addRezerwacja'

  rezerwacja: Rezerwacja[] = [];

  ngOnInit(){
    this._rezrwacjaService.getRezerwacja().subscribe(
      data =>{
          this.rezerwacja = data;
      }
    )
  }
  rezerwacja1(){
    for (var index in this.rezerwacja){
      if (this.rezerwacja[index].miejsce == 1)
      return true;
    }
    return false;
  }

  rezerwacja2(){
    for (var index in this.rezerwacja){
      if (this.rezerwacja[index].miejsce == 2)
      return true;
    }
    return false;
  }

  rezerwacja3(){
    for (var index in this.rezerwacja){
      if (this.rezerwacja[index].miejsce == 3)
      return true;
    }
    return false;
  }

  rezerwacja4(){
    for (var index in this.rezerwacja){
      if (this.rezerwacja[index].miejsce == 4)
      return true;
    }
    return false;
  }

  rezerwacja5(){
    for (var index in this.rezerwacja){
      if (this.rezerwacja[index].miejsce == 5)
      return true;
    }
    return false;
  }

  rezerwacja6(){
    for (var index in this.rezerwacja){
      if (this.rezerwacja[index].miejsce == 6)
      return true;
    }
    return false;
  }

  rezerwacja7(){
    for (var index in this.rezerwacja){
      if (this.rezerwacja[index].miejsce == 7)
      return true;
    }
    return false;
  }

  rezerwacja8(){
    for (var index in this.rezerwacja){
      if (this.rezerwacja[index].miejsce == 8)
      return true;
    }
    return false;
  }

  rezerwacja9(){
    for (var index in this.rezerwacja){
      if (this.rezerwacja[index].miejsce == 9)
      return true;
    }
    return false;
  }
  mess1: boolean =false;
  mess2: boolean =false;
  mess3: boolean =false;
  mess4: boolean =false;
  mess5: boolean =false;
  mess6: boolean =false;
  mess7: boolean =false;
  mess8: boolean =false;
  mess9: boolean =false;
  showMess1(){
    this.mess1 = !this.mess1;
  }
  showMess2(){
    this.mess2 = !this.mess2;
  }
  showMess3(){
    this.mess3 = !this.mess3;
  }
  showMess4(){
    this.mess4 = !this.mess4;
  }
  showMess5(){
    this.mess5 = !this.mess5;
  }
  showMess6(){
    this.mess6 = !this.mess6;
  }
  showMess7(){
    this.mess7 = !this.mess7;
  }
  showMess8(){
    this.mess8 = !this.mess8;
  }
  showMess9(){
    this.mess9 = !this.mess9;
  }


}
