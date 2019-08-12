import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSurveyTemplateComponent } from './create-survey-template/create-survey-template.component';
import { ShowSurveyComponent } from './show-survey/show-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSurveyTemplateComponent,
    ShowSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
