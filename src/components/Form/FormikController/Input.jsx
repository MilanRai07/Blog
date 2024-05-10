import { ErrorMessage, Field } from 'formik'
import React from 'react'
import Error from './Error';

const Input = (props) => {
  const { name, ...rest } = props;
  return (
    <>
      <div className='text-lime-700 text-sm'>
        <Field id={name} name={name} {...rest}></Field><br></br>
        <ErrorMessage name={name} element={<Error />} />
      </div>
    </>
  )
}

export default Input