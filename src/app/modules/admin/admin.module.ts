import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { adminRouter } from './admin-routing.module';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    adminRouter
  ],
  providers: [],
  bootstrap: [CharactersComponent]
})
export class AdminModule { }
