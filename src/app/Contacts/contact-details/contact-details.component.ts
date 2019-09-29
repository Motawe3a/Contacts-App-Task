import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IContacts } from 'src/app/shared/contact.model';
import { ContactsService } from 'src/app/shared/contacts.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {

  @Input() contact: IContacts;

  @Output() refreshContactList: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private contactService: ContactsService, private router: Router, private toastr: ToastrService ) { }

  editContact() {
    this.router.navigate(['EditContacts/' + this.contact.id]);
  }
  deleteContact(ContactToBeDeleted: IContacts) {
    const result = confirm('Are you sure, you want to delete this contact?');
    if (result) {
      this.contactService.deleteContact(this.contact.id);
      this.refreshContactList.emit(true);
      this.router.navigate(['Contacts']);
      this.toastr.success('deleted Successfully', 'Delete Contact');

    }
  }


}
