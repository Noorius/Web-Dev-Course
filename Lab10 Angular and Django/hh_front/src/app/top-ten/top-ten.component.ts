import { Component, OnInit } from '@angular/core';
import {CompaniesServiceService} from "../companies-service.service";
import {Vacancy} from "../models";

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {

  vacancies: Vacancy[] = []

  constructor(private companyService: CompaniesServiceService) { }

  ngOnInit(): void {
    this.get_top_10();
  }

  get_top_10(){
    this.companyService.getTopTen().subscribe((data) => {
      this.vacancies = data;
    });
  }
}
