import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyTemplateComponent } from './create-survey-template/create-survey-template.component';

const routes: Routes = [{ path: 'create-survey', component: CreateSurveyTemplateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
