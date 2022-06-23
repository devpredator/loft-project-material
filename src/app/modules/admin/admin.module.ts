import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { adminRouter } from './admin-routing.module';
import { CharactersComponent } from './components/characters/characters.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    adminRouter,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [CharactersComponent]
})
export class AdminModule { }
