import React from 'react'
import "./index.scss"
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
const FormAdd = ({getData}) => {

async function addFlower(values) {
  const res=await axios.post("http://localhost:3000/",values)
  toast.success('Successfully created!');
  getData()
}

  return (
    <div className='forma'>
      <Formik
      initialValues={{ image: '', title: '', price: '' }}
      validationSchema={Yup.object({
        image: Yup.string()
          .required('Required'),
        title: Yup.string()
          .required('Required'),
        price: Yup.number().positive(' price must be positive').required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        addFlower(values)
        resetForm()
      }}
    >
      <Form>
        <label htmlFor="image">image:</label>
        <Field name="image" type="text" />
     <div className="red">   <ErrorMessage name="image" /></div>

        <label htmlFor="title">title:</label>
        <Field name="title" type="text" />
        <div className="red"><ErrorMessage name="title" /></div>

        <label htmlFor="price">price:</label>
        <Field name="price" type="price" />
       <div className="red"> <ErrorMessage name="price" /></div>

        <button className='btn' type="submit">Add</button>
      </Form>
    </Formik>
    </div>
  )
}

export default FormAdd

