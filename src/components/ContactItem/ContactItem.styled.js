import { styled } from 'styled-components';

export const ItemEl = styled.li`
  width: 400px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  :hover {
    fill: #fb00ff;
  }
`;

export const ContactData = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 30px;
  border: 1px solid pink;
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const ContactName = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: rgb(104, 11, 109);
`;

export const ContactNumber = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

export const ContactDelete = styled.button`
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid pink;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;
