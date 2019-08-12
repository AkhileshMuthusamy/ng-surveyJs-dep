import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

@Component({
  selector: 'app-show-survey',
  templateUrl: './show-survey.component.html',
  styleUrls: ['./show-survey.component.css']
})
export class ShowSurveyComponent implements OnInit {
  surveyJSON = {
    pages: [
      { name: 'page1', elements: [{ type: 'radiogroup', name: 'question1', choices: ['item1', 'item2', 'item3'] }] }
    ]
  };

  constructor() {}

  ngOnInit() {
    const survey = new Survey.Model(this.surveyJSON);
    survey.onComplete.add(this.sendDataToServer);
    Survey.SurveyNG.render('surveyContainer', { model: survey });
  }

  sendDataToServer(survey) {
    // send Ajax request to your web server.
    console.dir(survey.data);
    alert('The results are:' + JSON.stringify(survey.data));
  }
}
