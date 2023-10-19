import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppKitchenComponent } from './app-kitchen/app-kitchen.component';
import { FormsModule } from '@angular/forms';
import { AppMagicOvenComponent } from './app-magic-oven/app-magic-oven.component';

@NgModule({
  declarations: [
    AppComponent,
    AppKitchenComponent,
    AppMagicOvenComponent
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
