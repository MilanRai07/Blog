import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react'
import Controller from './FormikController/Controller';

const initialValues = {
    name: '',
    password: ''
}
const validationSchema = Yup.object({
    name: Yup.string().required('name is required'),
    password: Yup.string().required('password is required')
})

const Login = () => {
    const [logged, setLogged] = useState(false)
    const onSubmit = (values, onSubmitProps) => {
        console.log('formvalues', values);
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            setLogged(true)
        }, 2500)
    }
    return (
        <>
            <div className='text-center'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {
                        (formik) => (
                            <Form className='flex flex-col gap-6'>
                                <Controller
                                    control='input'
                                    type='text'
                                    name='name'
                                    placeholder='name'
                                />

                                <Controller
                                    control='input'
                                    type='password'
                                    name='password'
                                    placeholder='password'
                                />

                                <div className='text-center'>
                                    <button className='button1' type='submit' disabled={!formik.isValid || formik.isSubmitting}>
                                        {
                                            formik.isSubmitting ? 'Logging...' : 'Log In'
                                        }
                                    </button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
                <div className='loginSignUpInfo'>
                    <p>
                        {
                            logged ? 'you have been logged' : ''
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;