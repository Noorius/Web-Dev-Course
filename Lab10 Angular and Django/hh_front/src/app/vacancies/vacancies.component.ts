import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../models";
import {CompaniesServiceService} from "../companies-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId: number = 0;

  constructor(private companyService: CompaniesServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const companyIdFromRoute = Number(routeParams.get('companyId'));
    this.companyId = companyIdFromRoute;

    this.getVacancies();
  }

  getVacancies(){
    this.companyService.getVacancies(this.companyId).subscribe((data) => {
      this.vacancies = data;
    })
  }

}
