import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';


@Injectable()
export class userService{

    constructor (private httpclient: HttpClient) { }

    getUser(): Observable<any> {
        return this.httpclient.get("http://localhost:8083/api/users");
    }
}