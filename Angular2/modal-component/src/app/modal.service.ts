import { Injectable, EventEmitter } from '@angular/core';
import { DomService } from './dom.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {

  sayHello = new Subject<any>();

  constructor(private domService: DomService) { }

  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';

  init(component: any, inputs: object, outputs: object) {
    let componentConfig = {
      inputs: inputs,
      outputs: outputs
    }
    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show-backdrop';
  }

  destroy() {
    document.getElementById(this.modalElementId).className = 'animate';

    setTimeout(() => {
      this.domService.removeComponent();
      document.getElementById(this.modalElementId).className = 'hidden';
      document.getElementById(this.overlayElementId).className = 'hidden';
    }, 500);


  }

  event() {
    this.sayHello.next('Cabrones');
  }
}