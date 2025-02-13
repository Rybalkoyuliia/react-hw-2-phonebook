import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  display: flex;
  background-color: rgb(52, 52, 52);
  justify-content: space-between;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 100%;
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledButton = styled.button`
  background-color: rgb(253, 135, 6);
  color: white;
  border: none;
  height: 25px;
  border-radius: 20px;
  font: 12px;
  font-style: italic;
  &:hover {
    cursor: pointer;
    background-color: orange;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 10px;
  font-style: italic;
  color: white;
`;
