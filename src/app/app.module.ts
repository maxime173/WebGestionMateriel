import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeClientComponent } from './component/liste-client/liste-client.component';
import { ListeContactComponent } from './component/liste-contact/liste-contact.component';
import { ListeMaterielComponent } from './component/liste-materiel/liste-materiel.component';
import { ListeInterfaceComponent } from './component/liste-interface/liste-interface.component';
import { DetailMaterielComponent } from './component/detail-materiel/detail-materiel.component';
import { DetailClientComponent } from './component/detail-client/detail-client.component';
import { RouterModule } from '@angular/router';
import { ListeIncidentComponent } from './component/liste-incident/liste-incident.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeClientComponent,
    ListeContactComponent,
    ListeMaterielComponent,
    ListeInterfaceComponent,
    DetailMaterielComponent,
    DetailClientComponent,
    ListeIncidentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    DataTablesModule,
    RouterModule.forRoot([
      { path: '', component: ListeClientComponent },
      { path: 'clients', component: ListeClientComponent },
      { path: 'clients/:id', component: DetailClientComponent },
      { path: 'clients/:idClient/materiels/:id', component: DetailMaterielComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
