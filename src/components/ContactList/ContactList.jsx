import { Component } from "react";
import {ContactItem} from '../ContactItem/ContactItem';
import {ListUl, ListDiv} from './ContactList.styled'
export class ContactList extends Component {
    render(){
        const {contacts, onDeleteContact } = this.props;
        return (
          <ListDiv> 
            <ListUl>
                {contacts.map(contact => {
                    return(
                        <ContactItem
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={onDeleteContact}
                        />
                    );
                })}
            </ListUl>
            </ListDiv> 
        )
    }
};