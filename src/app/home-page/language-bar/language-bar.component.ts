import { Component, OnInit, Output } from '@angular/core';
import { languages } from '../models/temp-languages.enum';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {

  selectedlanguages = new Set<languages>();
  languageOptions = new Set<languages>();
  showModal = false;
  readonly headerText = 'Select A Language';
  newSelection: languages;
  @Output() newSelectionMade = new EventEmitter<languages>();
  constructor() { }

  ngOnInit() {
    this.languageOptions.add(languages.css);
    this.languageOptions.add(languages.typescript);
  }

  updateNewSelection = (lang: languages) => {
    this.newSelection = lang;
  }
  saveLanguage = () => {
    this.selectedlanguages.add(this.newSelection);
    this.newSelectionMade.emit(this.newSelection);
    this.showModal = false;
  }
  show = () => {
    this.showModal = true;
  }
}
