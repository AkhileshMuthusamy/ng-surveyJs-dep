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

  editor;
  editorOptions = {
    showJSONEditorTab: false,
    showEmbededSurveyTab: false,
    haveCommercialLicense: true,
    generateValidJSON: true,
    questionTypes: ['text', 'checkbox', 'radiogroup', 'comment', 'html', 'matrix', 'dropdown', 'rating', 'file'],
    designerHeight: '600px'
  };

  ngOnInit() {
    this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', this.editorOptions);

    // editor.isAutoSave = true;

    // SurveyJs Save event; save survey
    this.editor.saveSurveyFunc = function() {
      console.log(this.editor.text);
      alert('Result outputed to console');
    };
  }

  loadSavedTemplate() {
    const templateData = {
      pages: [
        {
          name: 'page1',
          elements: [
            {
              type: 'checkbox',
              name: 'question1',
              choices: ['item1', 'item2', 'item3']
            }
          ]
        }
      ]
    };

    this.editor.text = JSON.stringify(templateData);
  }
}
