import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from "@angular/http";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

@Injectable()
export class UserService {
  private _baseUrl = 'https://test-api.javascript.ru/v1/yarik-mlb56-gmail-com/users/';
  private list = [];
  private err = {};

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
    this.err = {};
    let requestRes = this._http.post(this._baseUrl, user).share();
    requestRes.subscribe(
      (response: Response) => {
        this.list.push(response.json())
      },
      (error: Response) => {
        this.err = error.json().errors;
      });
    return requestRes;
  }

  removeUser(listToRemove){
    this._http.delete(this._baseUrl + listToRemove._id).subscribe(() => {
      this.list = this.list.filter(list => list !== listToRemove)
    });
  }
}