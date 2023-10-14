import React from 'react';
//import PropTypes from 'prop-types'; Проверка типов с помощью PropTypes
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  MyForm,
  MyField,
  Label,
  InputContainer,
  ButtonForm,
  ErrorMsg
} from './Form.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(3, 'Too Short!')
    .required('This field is required, please fill that'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in format: 000-00-00')
    .required('This field is required, please fill that'),
});

const FormContact = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <MyForm>
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <MyField type="text" name="name" placeholder="" />
          <ErrorMsg name="name" component="div" />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="number">Number</Label>
          <MyField type="tel" name="number" placeholder="" />
          <ErrorMsg name="number" component="div" />
        </InputContainer>

        <ButtonForm type="submit">Add contacu</ButtonForm>
      </MyForm>
    </Formik>
  );
};
export default FormContact;
