import { Component } from '@angular/core';
import { MarketplaceService } from './marketplace.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users;

  constructor(private marketplaceService: MarketplaceService) { }

  callService() {
    this.marketplaceService.getUsers().subscribe((users: any) => {
      console.log(users);
      this.users = users;
    });
  }

}
