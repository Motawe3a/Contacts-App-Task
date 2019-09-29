import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './Contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './Contacts/contact-details/contact-details.component';
import { AddContactComponent } from './Contacts/add-contact/add-contact.component';
import { EditContactComponent } from './Contacts/edit-contact/edit-contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchDataPipe } from './shared/search-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    AddContactComponent,
    EditContactComponent,
    NavbarComponent,
    SearchDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
