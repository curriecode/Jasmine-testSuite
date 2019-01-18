function AddressBook() {
   this.contacts = [];
   this.initialComplete = false;
};

AddressBook.prototype.getInitialContacts = function(cb) {
    let self = this;

    setTimeout(function() {
        self.initialComplete = true;
        if(cb) {
            return cb();
        }
    }, 3);
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}

AddressBook.prototype.updateContact = function(index, contactInfo) {
    // {name: "hi", size: "Large", favColo: "Blue"}
    if (!contactInfo.name || !contactInfo.size || !contactInfo.favColor) {
        return "Must include all contact information"
    }
    if (Object.keys(contactInfo).length > 3) {
        return "Please add contact info to contact class instead of adding to instances"
    }
    this.contacts[index].qualities = contactInfo;
    return this.contacts[index].qualities
}

AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}