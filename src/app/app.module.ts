import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeClientComponent } from './gestionMateriel/liste-client/liste-client.component';
import { ListeContactComponent } from './gestionMateriel/liste-contact/liste-contact.component';
import { ListeMaterielComponent } from './gestionMateriel/liste-materiel/liste-materiel.component';
import { ListeInterfaceComponent } from './gestionMateriel/liste-interface/liste-interface.component';
import { DetailMaterielComponent } from './gestionMateriel/detail-materiel/detail-materiel.component';
import { DetailClientComponent } from './gestionMateriel/detail-client/detail-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeClientComponent,
    ListeContactComponent,
    ListeMaterielComponent,
    ListeInterfaceComponent,
    DetailMaterielComponent,
    DetailClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
