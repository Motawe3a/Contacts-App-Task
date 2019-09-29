import { Component, OnInit } from '@angular/core';
import { IContacts } from 'src/app/shared/contact.model';
import { ContactsService } from 'src/app/shared/contacts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contact: IContacts;
  constructor(private contactService: ContactsService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const resId = id.replace(":", "");
    this.contact = this.contactService.getContact(resId);
  }

  updateContact() {
    this.contactService.updateContact(this.contact);
    this.router.navigate(['Contacts']);
    this.toastr.warning('Edited Successfully', 'Edit Contact');

  }

  cancelContact() {
    this.router.navigate(['Contacts']);
  }
}
