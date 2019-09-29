import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './Contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './Contacts/contact-details/contact-details.component';
import { AddContactComponent } from './Contacts/add-contact/add-contact.component';
import { EditContactComponent } from './Contacts/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
