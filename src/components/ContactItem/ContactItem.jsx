import { Component } from 'react';
import {ItemEl, ContactData, ContactName, ContactNumber, ContactDelete } from './ContactItem.styled'

export class ContactItem extends Component {
  render() {
    const {
      contact: { id, name, number },
      onDeleteContact,
    } = this.props;

    return (
      <ItemEl>
        <ContactData>
          <ContactName>{name}</ContactName>
          <ContactNumber>{number}</ContactNumber>
        </ContactData>
        <ContactDelete 
        type="button" 
        name="delete"
        onClick={() => onDeleteContact(id)}>
          &times;
        </ContactDelete>
      </ItemEl>
    );
  }
}
