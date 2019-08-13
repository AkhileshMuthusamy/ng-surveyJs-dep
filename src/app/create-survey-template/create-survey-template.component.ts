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

  editorOptions = {
    showJSONEditorTab: false,
    showEmbededSurveyTab: false,
    haveCommercialLicense: true,
    generateValidJSON: true,
    questionTypes: ['text', 'checkbox', 'radiogroup', 'comment', 'html', 'matrix', 'dropdown', 'rating', 'file'],
    designerHeight: '600px'
  };

  ngOnInit() {
    // Adds a propety in the SurveyEditor
    Survey.JsonObject.metaData.addProperty('questionbase', {
      name: 'a_questionId:number',
      default: 10
    });

    // Hide the property
    // Survey.JsonObject.metaData.findProperty('questionbase', 'a_questionId').visible = false;

    const editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', this.editorOptions);

    editor.text = JSON.stringify(this.loadSavedTemplate());

    // # Enable autosave
    // editor.isAutoSave = true;

    // Add new button to SurveyJS toolbar
    editor.toolbarItems.push({
      id: 'toolboxCustomization',
      title: 'Save as Template',
      visible: true,
      action: () => {
        alert('User clicked save as template button');
        console.log('User clicked save as template button');
      }
    });

    // SurveyJs Save event; save survey
    editor.saveSurveyFunc = () => {
      console.log(editor.text);
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

    return templateData;
  }
}
