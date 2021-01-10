import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   name = localStorage.getItem('username')
   link = '/welcome/'+ this.name
  constructor(
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ) { }

  ngOnInit(): void {
   
  }

}
