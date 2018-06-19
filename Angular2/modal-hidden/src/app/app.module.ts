import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyModalComponent } from './my-modal/my-modal.component';
import { MyModalOpenDirective } from './my-modal-open.directive';
import { MyModalService } from './my-modal.service';

@NgModule({
  declarations: [
    AppComponent,
    MyModalComponent,
    MyModalOpenDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [MyModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }