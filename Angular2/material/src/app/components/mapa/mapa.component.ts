import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  childs: number;
  selection: string;

  constructor() { }

  ngOnInit() { }

  isSafari(): boolean {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  openMenu() {
    let backdrop = document.querySelector('.cdk-overlay-backdrop');
    let menuPanel = document.querySelector('.mat-menu-panel');
    let parentPanel = menuPanel.parentElement;
    let menuItems = document.querySelectorAll('.mat-menu-item')
    let items = Array.from(menuItems);

    parentPanel.classList.remove('close-mat-menu');

    for (let item of items) {
      item.addEventListener('click', () => {
        parentPanel.classList.add('close-mat-menu');
        parentPanel.removeChild(menuPanel);
      });
    }

    backdrop.addEventListener('click', () => {
      parentPanel.classList.add('close-mat-menu');
      parentPanel.removeChild(menuPanel);
    });
  }

  test1() {
    this.selection = 'Option 1';
  }

  test2() {
    this.selection = 'Option 2';
  }


}


// export function toggleMatSidenav(open: boolean): void {
//   if (isSafari()) {
//     let sidenav = document.querySelector('mat-sidenav');
//     if (open) {
//       let backdrop = document.querySelector('.mat-drawer-backdrop');
//       sidenav.classList.add('open-sidenav');

//       backdrop.addEventListener('click', () => {
//         sidenav.classList.remove('open-sidenav');
//       });
//     } else {
//       sidenav.classList.remove('open-sidenav');
//     }
//   }
// }