import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { Report } from 'notiflix';
import FormContact from './Form/Form'
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section'


export class App extends Component{

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
  }
 addContact = data => {
  const identContactName = this.state.contacts.some(
    ({ name }) => data.name === name
  );
  if (identContactName) {
    return Report.warning(
      'WARNING',
      `${data.name} is already in contacts`,
      'ok'
    );
  }

const contact = {
  ...data,
  id: nanoid(),
};
this.setState(({ contacts }) => ({
  contacts: [contact, ...contacts],
}));
 };

delContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),

  }));
};

changeFilter = evt => {
  //this.setState({filter: evt.currentTarget.value.trim()});
  this.setState({ filter: evt.target.value });
};

getVisibleContacts = () => {
  const { contacts, filter } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

  render(){
    const {filter} = this.state;
    const visibleContacts = this.getVisibleContacts();
       
    return (
    <Section >
      <h2>Phonebook</h2>
      <FormContact onAdd={this.addContact}/>
      <Filter value={filter} onChange={this.changeFilter}/>
      {visibleContacts.length > 0 && (
        <ContactList
        contacts={visibleContacts}
        onDeleteContact={this.delContact}
        />
      )}
          
    </Section>
  );}
};
