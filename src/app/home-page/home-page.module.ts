import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageControllerComponent } from './home-page-controller/home-page-controller.component';
import { SnippetAdderComponent } from './snippet-adder/snippet-adder.component';
import { LanguageBarComponent } from './language-bar/language-bar.component';
import { SnippetCardComponent } from './snippet-card/snippet-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HomePageControllerComponent,
    SnippetAdderComponent,
    LanguageBarComponent,
    SnippetCardComponent
  ],
  exports: [
    HomePageControllerComponent
  ]
})
export class HomePageModule {}
