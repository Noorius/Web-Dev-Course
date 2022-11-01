import {Component, OnInit} from '@angular/core';
import {CompaniesServiceService} from "./companies-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh_front';

  logged = false;
  username = "";
  password = "";

  ngOnInit() {
    const token = localStorage.getItem("token");
    if(token){
      this.logged = true;
    }
  }

  constructor(private companiesService: CompaniesServiceService) {
  }

  login(){
    this.companiesService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.access);
      this.logged = true;
      this.username = this.password = '';
    })
  }

  logout(){
    this.logged = false;
    localStorage.removeItem("token");
  }
}
