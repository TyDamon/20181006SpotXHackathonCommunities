import { Component, OnInit } from '@angular/core';
import { UserBackendService } from '../../services/user-backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userBackendService: UserBackendService
  ) { }

  ngOnInit(
    
  ) {
    this.checkUserLogin()
  }

  checkUserLogin() {
    let test = this.userBackendService.checkUserLogin()
    console.log(test)
  }
}
