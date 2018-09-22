import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './/app-routing.module';
import { FormComponent } from './form/form.component';

import { HighlightModule } from 'ngx-highlightjs';
import { UiElementsComponent } from './ui-elements/ui-elements.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    MainComponent,
    FooterComponent,
    FormComponent,
    UiElementsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HighlightModule.forRoot( { theme: 'agate' })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
