import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private modalService: ModalService) {
    this.modalService.sayHello.subscribe((data) => this.saludar());
  }

  initModal() {
    console.log('init modal');
    let inputs = {
      isMobile: false
    }
    this.modalService.init(ModalComponent, inputs, {});
  }

  removeModal() {
    this.modalService.destroy();
  }

  saludar() {
    console.log('Hola, Daniel Flórez');
  }
}
