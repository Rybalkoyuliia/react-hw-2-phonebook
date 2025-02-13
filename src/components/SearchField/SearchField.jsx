import { StyledLabel } from 'components/ContactForm/ContactForm.styled';
import React from 'react';

export class SearchField extends React.Component {
  handleChange = e => {
    const filter = e.target.value;
    this.props.setFilter(filter);
  };

  render = () => {
    return (
      <StyledLabel htmlFor="search">
        Filter:
        <input
          style={{
            height: '20px',
            borderRadius: '10px',
            border: 'none',
            padding: '2px 8px',
            outline: 'none',
          }}
          onChange={this.handleChange}
          type="text"
          name="search"
          id="search"
          autoComplete="off"
        ></input>
      </StyledLabel>
    );
  };
}
