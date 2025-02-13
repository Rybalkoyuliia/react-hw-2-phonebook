import React from 'react';

import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchField } from './SearchField/SearchField';
import {
  StyledContactTitle,
  StyledPhonebookTitle,
  StyledPhonebookWrapper,
  StyledSearchFieldWrapper,
} from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '(459)845-1256' },
      { id: nanoid(), name: 'Hermione Kline', number: '(443)345-8912' },
      { id: nanoid(), name: 'Eden Clements', number: '(645)989-1779' },
      { id: nanoid(), name: 'Annie Copeland', number: '(227)047-9126' },
    ],
    filter: '',
  };

  updateContactList = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id: nanoid() }],
    }));
  };

  deleteContact = id => {
    return this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  returnContactList = () => {
    if (!this.state.filter) {
      return this.state.contacts;
    } else {
      return this.state.contacts.filter(
        contact =>
          contact.name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase()) ||
          contact.number.includes(this.state.filter)
      );
    }
  };

  setFilter = filteredValue => {
    this.setState({ filter: filteredValue });
  };

  render = () => {
    return (
      <StyledPhonebookWrapper>
        <StyledPhonebookTitle>My Phonebook</StyledPhonebookTitle>
        <ContactForm
          setValue={this.updateContactList}
          contactList={this.state.contacts}
        />
        <StyledSearchFieldWrapper>
          <StyledContactTitle>Contacts</StyledContactTitle>
          <SearchField setFilter={this.setFilter} />
        </StyledSearchFieldWrapper>
        <ContactList
          list={this.returnContactList()}
          delete={this.deleteContact}
        />
      </StyledPhonebookWrapper>
    );
  };
}
