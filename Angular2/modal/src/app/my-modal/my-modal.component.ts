import { Component, OnInit, Input } from '@angular/core';
import { MyModalService } from '../my-modal.service';

@Component({
  selector: 'my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {
  @Input() name: string
  show: boolean = false

  constructor(private myModals: MyModalService) { }

  ngOnInit() {
    this.myModals.set(this.name, this);
    console.log(this.name);
  }

  clickOverlay(event: Event) {
    const target = (event.target as HTMLElement)

    // only close if we clicked on the `reveal-overlay` not on it's content
    if (target.classList.contains('reveal-overlay')) {
      this.toggle()
    }
  }

  toggle() {
    this.show = !this.show

    if (this.show) {
      document.addEventListener('keyup', this.escapeListener)
    } else {
      document.removeEventListener('keyup', this.escapeListener)
    }
  }

  private escapeListener = (event: KeyboardEvent) => {
    if (event.which === 27 || event.keyCode === 27) {
      this.show = false
    }
  }
}