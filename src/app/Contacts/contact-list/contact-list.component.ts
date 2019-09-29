import { Component, OnInit } from '@angular/core';
import { IContacts } from 'src/app/shared/contact.model';
import { ContactsService } from 'src/app/shared/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  _listFilterBy: string;
  allContacts: IContacts[];
  FilteredList: IContacts[];

  constructor(private contactService: ContactsService, private router: Router) { }


  get listFilterBy(): string {
    return this._listFilterBy;
  }


  set listFilterBy(value: string) {
    this._listFilterBy = value;
    this.FilteredList = this._listFilterBy ? this.performFilter(this._listFilterBy) : this.allContacts;
  }

  performFilter(filterBy: string): IContacts[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.allContacts.filter((contact: IContacts) => contact.Name.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
    contact.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  ngOnInit() {
    this.allContacts = this.contactService.getAllContacts();
    this.FilteredList = this.allContacts;
    this._listFilterBy = '';
  }

  addContact() {
    this.router.navigate(['AddContact']);
  }

  refreshList() {
    this.allContacts = this.contactService.getAllContacts();
    this.FilteredList = this.allContacts;
  }

}
