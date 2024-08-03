import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import {} from "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          
        ];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleRemoveContact = (contactToRemove) => {
    setContacts(contacts.filter((contact) => contact.id !== contactToRemove.id));
  };

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} onRemoveContact={handleRemoveContact} />
      <Form addContact={setContacts} contacts={contacts}></Form>
    </div>
  );
}

export default Contacts;
