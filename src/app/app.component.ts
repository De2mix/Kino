import { Component } from '@angular/core';
import { userService } from './services/user.service';
import { User } from './classes/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multikino';


}
