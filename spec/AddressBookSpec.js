
// let addressBook = new AddressBook();

describe('Address Book', function(){
    beforeEach(function() {
       addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('Should be able to add a contact', function() {
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);

    });

    it('Should be able to delete an address', function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0)

        expect(addressBook.getContact(0)).not.toBeDefined();

    });

    it('Address book should update contact', function() {
        addressBook.addContact(thisContact);
        let contactInfo = {name:"j", size:"m", favColor:"a"}
        let response = addressBook.updateContact(0,contactInfo);
        expect(response).toBe(contactInfo)
        // call updateContact({})
    })
    // Write a test that checks if updateContact changes the qualities of the contact 
    // write a test that makes sure you cant add more than 3 qualities and receive the error string
    // write a test that makes sure that if not all 3 qualities are passed to updateContact, you receive the error message
});

describe('Async Address Book', function() {
    let addressBook = new AddressBook();

    beforeEach(function(done) {
        addressBook.getInitialContacts(function(){
            done();
        });
       
    });

    it('Should grab initial contacts', function(done) {

        // addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});

