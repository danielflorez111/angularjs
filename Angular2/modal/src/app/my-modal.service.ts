import { Injectable } from '@angular/core';
import { MyModalComponent } from './my-modal/my-modal.component';

@Injectable()
export class MyModalService {
  map: Map<string, MyModalComponent> = new Map

  get(v: string): MyModalComponent {
    return this.map.get(v)
  }

  set(key: string, v: MyModalComponent): void {
    this.map.set(key, v)
  }
}