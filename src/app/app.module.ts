import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeClientComponent } from './gestionMateriel/liste-client/liste-client.component';
import { ListeContactComponent } from './gestionMateriel/liste-contact/liste-contact.component';
import { ListeMaterielComponent } from './gestionMateriel/liste-materiel/liste-materiel.component';
import { ListeInterfaceComponent } from './gestionMateriel/liste-interface/liste-interface.component';
import { DetailMaterielComponent } from './gestionMateriel/detail-materiel/detail-materiel.component';
import { DetailClientComponent } from './gestionMateriel/detail-client/detail-client.component';
import { RouterModule } from '@angular/router';
import { AjoutClientComponent } from './gestionMateriel/ajout-client/ajout-client.component';
import { AjoutMaterielComponent } from './gestionMateriel/ajout-materiel/ajout-materiel.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeClientComponent,
    ListeContactComponent,
    ListeMaterielComponent,
    ListeInterfaceComponent,
    DetailMaterielComponent,
    DetailClientComponent,
    AjoutClientComponent,
    AjoutMaterielComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListeClientComponent },
      { path: 'clients', component: ListeClientComponent },
      { path: 'materiels', component: ListeMaterielComponent },
      { path: 'clients/ajout', component: AjoutClientComponent },
      { path: 'materiels/ajout', component: AjoutMaterielComponent},
      { path: 'clients/:id', component: DetailClientComponent },
      { path: 'materiels/:id', component: DetailMaterielComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
