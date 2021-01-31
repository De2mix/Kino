import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { userService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor (private _userService: userService){}

  user: User[] = [];

  ngOnInit(){
    this._userService.getUser().subscribe(
      data =>{
          this.user = data;
      }
    )
  }

}
