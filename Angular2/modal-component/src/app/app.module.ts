import { DomService } from './dom.service';
import { ModalService } from './modal.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [ModalService, DomService],
  bootstrap: [AppComponent]
})
export class AppModule { }