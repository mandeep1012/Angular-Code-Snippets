import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Snippet } from '../models/snippet';
import { languages } from '../models/temp-languages.enum';

@Component({
  selector: 'app-snippet-adder',
  templateUrl: './snippet-adder.component.html',
  styleUrls: ['./snippet-adder.component.scss']
})
export class SnippetAdderComponent implements OnInit {
  @Input() lang: languages;
  @Output() snippetAdded = new EventEmitter<Snippet>();
  name: string;
  desc: string;
  code: string;
  showModal = false;

  readonly headerText = 'Save Snippet';
  constructor() { }

  ngOnInit() {
  }
  addSnippet = () => {

  }

  openModal = () => {
    this.showModal = true;
  }
}
