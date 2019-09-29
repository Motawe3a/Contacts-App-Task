import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/shared/contacts.service';
import { Router } from '@angular/router';
import { IContacts } from 'src/app/shared/contact.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  Name: string;
  Email: string;
  Phone: string;
  contact: IContacts;

  constructor(private contactService: ContactsService, private router: Router, private toastr: ToastrService) { }

  saveContact() {
    this.contact = new IContacts(this.makeRandomId(), this.Name, this.Email, this.Phone);
    this.contactService.addContact(this.contact);
    this.router.navigate(['Contacts']);
    this.toastr.success('Save Successfully', 'Add Contact');

  }

  cancelContact() {
    this.router.navigate(['Contacts']);
  }

  makeRandomId() {
    let text = '';
    const possible = 'abcdefghijkmnopqrstuvwxyz01146296972';

    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }

  }


}
