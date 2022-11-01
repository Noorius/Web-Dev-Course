import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken, Company, Vacancy} from "./models";
import {CompaniesComponent} from "./companies/companies.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";


@Injectable({
  providedIn: 'root'
})
export class CompaniesServiceService {
  BASE_URL = "http://localhost:8000";  //"http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>( `${this.BASE_URL}/api/companies`);
  }

  getVacancies(id: number): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies`)
  }

  getTopTen(){
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/top_ten`)
  }
}
