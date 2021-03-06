import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    ClickOutsideModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxa_9f44lAmCRS2HNo_ipW2EsJx6J2LJ4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }