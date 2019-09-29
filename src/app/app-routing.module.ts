import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './Contacts/contact-list/contact-list.component';
import { AddContactComponent } from './Contacts/add-contact/add-contact.component';
import { EditContactComponent } from './Contacts/edit-contact/edit-contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'Contacts', pathMatch: 'full' },
  { path: 'Contacts', component: ContactListComponent },
  { path: 'AddContact', component: AddContactComponent },
  { path: 'EditContacts/:id', component: EditContactComponent },
  { path: '**', redirectTo: 'Contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
