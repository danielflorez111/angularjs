import { Component, HostListener } from "@angular/core";
import { KeycloakService } from "./keycloak/keycloak.service";
import { KeycloakHttp } from "./keycloak/keycloak.http";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleToken = 'User Information Obtained from the Token';
  titleAPIList = 'User List obtained via Keycloak HTTP API call';
  titleAPIListExampleRequestHeader = 'Example Request Headers for Keycloak HTTP API call';

  isTokenCardVisible: boolean = false;
  isAPICardsVisible: boolean = false;

  username: string;
  fullName: string;
  usersArray = [];

  constructor(private keycloakHttp: KeycloakHttp) {
    // window.addEventListener("message", this.receiveMessage, false);
    window.name = 'attendantapp';
    localStorage.setItem('attendantapp', 'true');
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
    window.open("http://localhost:4200/", "_self");

    // let coreapp = localStorage.getItem('coreapp');
    // console.log(coreapp);

    // if (!coreapp) {
    //   window.open('http://localhost:4200/', 'coreapp');
    //   localStorage.setItem('coreapp', 'true');
    // } else {
    //   window.open('', 'coreapp');
    // }


    // let coreapp = window.open('', 'coreapp');
    // if (coreapp.location.href === 'about:blank') {
    //   //   coreapp.location.href = 'http://localhost:4200/';
    // }


    // if (!this.coreapp) {
    //   this.coreapp = window.open('http://localhost:4200/', 'coreapp');
    // } else {
    // this.coreapp = window.open('', 'coreapp');
    // }

    // coreapp.focus();
    // window.
  }


  // receiveMessage(event) {
  //   console.log(event);
  //   // if (event.origin !== "http://example.org:8080")
  //   //   return;
  // }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler($event) {
    localStorage.removeItem('attendantapp');
  }

}