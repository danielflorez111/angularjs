import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { PouComponent } from './components/pou/pou.component';
import { ClientComponent } from './components/client/client.component';
import { AccountComponent } from './components/account/account.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'client', component: ClientComponent },
  { path: 'pou', component: PouComponent },
  { path: 'usuario', component: UsuarioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PouComponent,
    ClientComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }