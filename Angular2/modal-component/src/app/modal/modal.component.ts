import { ModalService } from './../modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
  }

  close() {
    this.modalService.destroy();
  }

}