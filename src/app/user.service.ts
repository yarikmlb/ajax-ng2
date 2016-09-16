import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from "@angular/http";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class UserService {
  private _baseUrl = 'http://test-api.javascript.ru/v1/yarik-mlb56-gmail-com/users/';
  public list = [];

  constructor(private _http: Http) {
    Observable.interval(1000).mergeMap(()=>this._http.get(this._baseUrl))
      .subscribe((response:Response)=>{
        this.list = response.json();
      })
  }

  returnList() {
    return this.list;
  }

  add(user){
    this._http.post(this._baseUrl, user)
      .subscribe((response: Response) =>{
        this.list.push(response.json());
      });
  }

  removeUser(listToRemove){
    this._http.delete(this._baseUrl + listToRemove._id).subscribe(() => {
      this.list = this.list.filter(list => list !== listToRemove)
    });
  }
}
