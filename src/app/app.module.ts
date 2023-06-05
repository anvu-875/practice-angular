import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentFatherComponent } from './content-father/content-father.component';
import { ContentChildComponent } from './content-father/content-child/content-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentFatherComponent,
    ContentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
