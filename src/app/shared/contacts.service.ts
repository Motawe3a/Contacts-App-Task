import { Injectable } from '@angular/core';
import { IContacts } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  allContacts: IContacts[] = [
    {
      id: '1',
      Name: 'Ahmed Elsayed',
      Email: 'Motawe3a@yahoo.com',
      Phone: '01146296972'
    },
    {
      id: '2',
      Name: 'Asmaa Motawea',
      Email: 'Asmaaa@yahoo.com',
      Phone: '0112403707'
    }
  ];

  getAllContacts(): IContacts[] {
    return this.allContacts;
  }

  addContact(contact: IContacts) {
    this.allContacts.push(contact);
  }

  updateContact(contact: IContacts) {
    const updateContact = this.allContacts.find(con => con.id = contact.id);
    updateContact.Name = contact.Name;
    updateContact.Email = contact.Email;
    updateContact.Phone = contact.Phone;
  }

  getContact(id: string) {
    return this.allContacts.find(contact => contact.id == id);
  }

  deleteContact(id: string) {
    this.allContacts = this.allContacts.filter(contact => contact.id != id);
  }

}
