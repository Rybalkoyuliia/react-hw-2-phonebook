import styled from 'styled-components';

export const StyledContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: fit-content;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 15px;
  }

  &::-webkit-scrollbar-track {
    background: #d3d3d3;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(253, 135, 6);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledContactListItem = styled.li`
  background-color: rgb(52, 52, 52);
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledContactName = styled.span`
  color: rgb(253, 135, 6);
  font-weight: bold;
  font-size: 18px;
`;

export const StyledContactPhone = styled.span`
  color: white;
  font-size: 18px;
`;

export const StyledButton = styled.button`
  border-radius: 20px;
  height: 20px;
  border: 2px solid rgb(253, 135, 6);
  color: rgb(253, 135, 6);
  &:hover {
    background-color: orange;
    color: white;
    cursor: pointer;
    border: 2px solid orange;
  }
`;
