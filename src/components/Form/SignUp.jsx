import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react'
import Controller from './FormikController/Controller';

const initialValues = {
    name: '',
    email: '',
    password: '',
    checkPassword: ''
}
const validationSchema = Yup.object({
    name: Yup.string().required('name is required'),
    email: Yup.string().email('invalid email').required('email is required'),
    password: Yup.string().required('password is required'),
    checkPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required()
})
const SignUp = () => {
    const [signed, setSigned] = useState(false);

    const onSubmit = (values, onSubmitProps) => {
        console.log('formValues', values)
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            setSigned(true)
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
                                    type='email'
                                    name='email'
                                    placeholder='email'
                                />
                                <Controller
                                    control='input'
                                    type='password'
                                    name='password'
                                    placeholder='password'
                                />
                                <Controller
                                    control='input'
                                    type='password'
                                    name='checkPassword'
                                    placeholder='confirm password'
                                />
                                <div className='text-center'>
                                    <button className='button1' type='submit' disabled={!formik.isValid || formik.isSubmitting}>
                                        {
                                            formik.isSubmitting ? 'Submitting...' : 'Sign Up'
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
                            signed ? 'you have been signed' : ''
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp;