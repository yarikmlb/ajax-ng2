import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ServerinputComponent} from "../serverinput/serverinput.component";

@Component({
  selector: 'app-serveroutput',
  templateUrl: './serveroutput.component.html',
  styleUrls: ['./serveroutput.component.css']
})
export class ServeroutputComponent implements OnInit {
  constructor(private _userService: UserService) {
  }

  ngOnInit() {
  }

  getList(){
    return this._userService.returnList();
  }

  removeUser(user){
    this._userService.removeUser(user);
  }
}
