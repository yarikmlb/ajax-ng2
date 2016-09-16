import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ServerinputComponent} from "../serverinput/serverinput.component";

@Component({
  selector: 'app-serveroutput',
  templateUrl: './serveroutput.component.html',
  styleUrls: ['./serveroutput.component.css']
})
export class ServeroutputComponent implements OnInit {
  constructor(private _userService: UserService, private _inputServer: ServerinputComponent) {
  }

  ngOnInit() {
  }

  getList(){
    return this._userService.returnList();
  }

  removeUser(){
    this._userService.removeUser(this._userService.list);
  }
}
