export class IContacts {
  public id: string;
  public Name: string;
  public Email:string;
  public Phone: string;

  constructor( id: string, Name: string, Email: string, Phone: string) {
      this.id = id;
      this.Name = Name;
      this.Email = Email;
      this.Phone = Phone;
  }
}
