import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-knockout';
import * as SurveyEditor from 'surveyjs-editor';

@Component({
  selector: 'app-create-survey-template',
  templateUrl: './create-survey-template.component.html',
  styleUrls: ['./create-survey-template.component.css']
})
export class CreateSurveyTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const editorOptions = {
      showJSONEditorTab: false,
      showEmbededSurveyTab: false,
      haveCommercialLicense: true,
      generateValidJSON: true,
      questionTypes: ['text', 'checkbox', 'radiogroup', 'comment', 'html', 'matrix', 'dropdown', 'rating', 'file'],
      designerHeight: '600px'
    };

    const editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);

    // editor.isAutoSave = true;

    // save survey
    editor.saveSurveyFunc = function() {
      console.log(editor.text);
    };
  }
}
