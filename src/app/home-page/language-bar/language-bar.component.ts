import { Component, OnInit } from '@angular/core';
import { languages } from '../models/temp-languages.enum';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {

  languages = new Set<languages>();
  constructor() { }

  ngOnInit() {
    this.languages.add(languages.typescript);
    this.languages.add(languages.css);
  }

}
