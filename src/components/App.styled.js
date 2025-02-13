import styled from 'styled-components';

export const StyledPhonebookWrapper = styled.div`
  background-color: rgb(38, 38, 38);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 80px;
  border-radius: 20px;
  width: 50%;
  margin: 50px auto;
  max-height: 750px;
`;

export const StyledPhonebookTitle = styled.h1`
  color: white;
  font-weight: bold;
  margin: 0 0 30px;
  font-size: 36px;
  text-align: center;
`;

export const StyledSearchFieldWrapper = styled.div`
  background-color: rgb(52, 52, 52);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const StyledContactTitle = styled.h2`
  color: white;
`;
