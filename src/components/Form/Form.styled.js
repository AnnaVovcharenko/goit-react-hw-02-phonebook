import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const MyForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 25px;
align-items: center;
`;
export const MyField = styled(Field)`
padding: 10px;
border: 1px solid pink;
border-radius: 10px;
transition: border-color 0.4s ease;
width: 400px;
&:focus {
border-color: #fb00ff;
  }
`;


export const Label = styled.label`
display: flex;
margin-bottom: 15px;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 420px;
  
`;
export const ButtonForm = styled.button`
  font-size: 25px;
  padding: 10px ;
  background-color: pink;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;
  width: 420px;

  &:active {
    background-color: #fb00ff;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  margin-top: 10px;

  pointer-events: none;
`;