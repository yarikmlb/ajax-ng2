import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-serverinput',
  templateUrl: './serverinput.component.html',
  styleUrls: ['./serverinput.component.css']
})
export class ServerinputComponent implements OnInit {
  public user = {email: '', fullName: ''};

  constructor(private _userService: UserService) {
  }

  add(){
    this._userService.add(this.user);
    this.user.email = '';
    this.user.fullName = '';
  }

  ngOnInit() {
  }

}
