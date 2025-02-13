import React from 'react';

import ReactInputMask from 'react-input-mask';

import {
  StyledButton,
  StyledForm,
  StyledFormWrapper,
  StyledInputsWrapper,
  StyledLabel,
} from './ContactForm.styled';

export class ContactForm extends React.Component {
  handleAddContact = e => {
    e.preventDefault();
    const { contactList, setValue } = this.props;
    const form = e.currentTarget;
    const addedName = form.elements.name.value;
    const addedPhone = form.elements.number.value;

    const exisingContact = contactList.some(
      contact => contact.name === addedName
    );
    if (exisingContact) {
      alert(`${addedName} is already in contacts`);
      return;
    }

    const existingPhoneNumber = contactList.some(
      contact => contact.number === addedPhone
    );

    if (existingPhoneNumber) {
      const existingContact = contactList.find(
        contact => contact.number === addedPhone
      );

      if (existingContact) {
        alert(
          `${addedPhone} is already in contacts under the name ${existingContact.name}`
        );
        return;
      }
    }

    setValue(addedName, addedPhone);

    setTimeout(() => {
      form.reset();
    }, 0);
  };

  render = () => {
    return (
      <StyledFormWrapper>
        <StyledForm onSubmit={this.handleAddContact}>
          <StyledInputsWrapper>
            <StyledLabel htmlFor="name">
              Name
              <ReactInputMask
                style={{
                  height: '20px',
                  borderRadius: '10px',
                  border: 'none',
                  padding: '2px 8px',
                  outline: 'none',
                }}
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Enter name"
                required
              />
            </StyledLabel>
            <StyledLabel htmlFor="number">
              Number
              <ReactInputMask
                style={{
                  height: '20px',
                  borderRadius: '10px',
                  border: 'none',
                  padding: '2px 8px',
                  outline: 'none',
                }}
                mask="(999)999-9999"
                type="tel"
                name="number"
                id="number"
                placeholder="(000)000-0000"
                required
              ></ReactInputMask>
            </StyledLabel>
          </StyledInputsWrapper>
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    );
  };
}
