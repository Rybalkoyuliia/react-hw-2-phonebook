import React from 'react';
import {
  StyledButton,
  StyledContactList,
  StyledContactListItem,
  StyledContactName,
  StyledContactPhone,
  StyledInfoWrapper,
} from './ContactList.styled';

export class ContactList extends React.Component {
  handleDelete = id => {
    this.props.delete(id);
  };

  render = () => {
    const { list } = this.props;

    return (
      <StyledContactList>
        {list.map(item => (
          <StyledContactListItem key={item.id}>
            <StyledInfoWrapper>
              <StyledContactName> {item.name}</StyledContactName>
              <StyledContactPhone> {item.number}</StyledContactPhone>
            </StyledInfoWrapper>
            <StyledButton
              onClick={() => {
                this.handleDelete(item.id);
              }}
            >
              Delete
            </StyledButton>
          </StyledContactListItem>
        ))}
      </StyledContactList>
    );
  };
}
