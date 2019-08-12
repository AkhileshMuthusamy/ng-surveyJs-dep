import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyTemplateComponent } from './create-survey-template/create-survey-template.component';
import { ShowSurveyComponent } from './show-survey/show-survey.component';

const routes: Routes = [
  { path: 'create-survey', component: CreateSurveyTemplateComponent },
  { path: 'show-survey', component: ShowSurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
