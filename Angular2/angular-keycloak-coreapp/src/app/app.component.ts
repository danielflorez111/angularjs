import { Component, HostListener, AfterViewInit } from "@angular/core";
import { KeycloakService } from "./keycloak/keycloak.service";
import { KeycloakHttp } from "./keycloak/keycloak.http";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  titleToken = 'User Information Obtained from the Token';
  titleAPIList = 'User List obtained via Keycloak HTTP API call';
  titleAPIListExampleRequestHeader = 'Example Request Headers for Keycloak HTTP API call';

  isTokenCardVisible: boolean = false;
  isAPICardsVisible: boolean = false;

  username: string;
  fullName: string;
  usersArray = [];
  coreappCount;

  constructor(private keycloakHttp: KeycloakHttp) {
    window.name = 'coreapp';
  }

  reset(): void {
    this.isTokenCardVisible = false;
    this.isAPICardsVisible = false;
    this.usersArray = [];
  }

  getUserInfoFromToken(): void {
    this.username = KeycloakService.getUsername();
    this.fullName = KeycloakService.getFullName();

    this.isTokenCardVisible = true;
  }

  getUsersFromJsonApi(): void {
    this.keycloakHttp.get(environment.usersApiRootUrl)
      .map(response => response.json())
      .subscribe(
        result => {
          this.usersArray = result;
          this.isAPICardsVisible = true;
        },
        error => console.log(error),
        () => console.log('Request Completed :: AppComponent.getUsersFromJsonAPI()')
      );
  }

  logout(): void {
    KeycloakService.logout();
  }

  goTo() {
    window.open("http://localhost:4400/", "_self");

    // var bc = new BroadcastChannel('test_channel');
    // bc.postMessage('This is a test message.');
    // console.log(bc);
    // let attendantapp = localStorage.getItem('attendantapp');
    // console.log(attendantapp);

    // if (!attendantapp) {
    //   window.open('http://localhost:4400/', 'attendantapp');
    //   localStorage.setItem('attendantapp', 'true');
    // } else {
    //   window.open('', 'attendantapp');
    // }

    // let hola = localStorage.getItem('cie10List');
    // console.log(hola);


    // let attendantapp = window.open('', 'attendantapp');
    // attendantapp.postMessage('Revise!', 'http://localhost:4200/');

    // if (attendantapp.location.href === 'about:blank') {
    //   //   attendantapp.location.href = 'http://localhost:4400/';
    // }

    // if (!this.attendantapp) {
    //   this.attendantapp = window.open('http://localhost:4400/', 'attendantapp');
    // } else {
    // this.attendantapp = window.open('', 'attendantapp');
    // }

    // attendantapp.focus();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler($event) {
    // debugger;
    let count = Number(localStorage.getItem("coreapp"));
    if (count <= 1) localStorage.removeItem("coreapp")
    else localStorage.setItem("coreapp", --count + '');
  }

  ngAfterViewInit() {
    this.coreappCount = localStorage.getItem('coreapp');
    console.log(this.coreappCount);

    if (this.coreappCount) {
      let count = Number(this.coreappCount);
      localStorage.setItem("coreapp", ++count + '');
      console.log(count);

      if (count > 1) {
        setTimeout(() => {
          alert('Ya tienes una ventana abierta');
        }, 1000);
      }

    } else {
      localStorage.setItem("coreapp", "1");
    }
  }

}