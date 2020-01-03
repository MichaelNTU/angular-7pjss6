import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,
      HttpModule ],
  declarations: [ AppComponent, ],HelloComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
