import { Component, OnInit } from '@angular/core';
import { Snippet } from '../models/snippet';
import { languages } from '../models/temp-languages.enum';

@Component({
  selector: 'app-home-page-controller',
  templateUrl: './home-page-controller.component.html',
  styleUrls: ['./home-page-controller.component.scss']
})
export class HomePageControllerComponent implements OnInit {
  snippets = [
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
    new Snippet('my snipshake', 'nbrings all the boys', 'i am the bst code', languages.typescript),
  ];
  constructor() { }

  ngOnInit() {
  }

}
