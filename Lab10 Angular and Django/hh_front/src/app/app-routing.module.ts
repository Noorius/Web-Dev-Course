import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesComponent} from "./companies/companies.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {TopTenComponent} from "./top-ten/top-ten.component";

const routes: Routes = [
  {path: '', component: CompaniesComponent},
  {path: ':companyId', component: VacanciesComponent},
  {path: 'vacancies/top_ten', component: TopTenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
