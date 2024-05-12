import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const initialValues = {
    email: '',
}
const validationSchema = Yup.object({
    email: Yup.string().email('invalid email').required('email is required'),
})
const Subscribe = () => {

    const onSubmit = (values, onSubmitProps) => {
        console.log(values);
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
        }, 2500)
    }
    return (
        <>
            <section className='mt-20 m-d:mt-5 m-d:w-full m-d:text-center'>
                <h1 className='sectionHeader bg-customGreen-200'>Subscribe</h1>
                <div className='h-52 shadow-customShadow dark:shadow-none mt-16 md:mt-10 flexCenter text-center rounded-md dark:bgDark'>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {
                            (formik) => (

                                <Form className='text-sm text-lime-800'>
                                    <Field
                                        type='email'
                                        placeholder='email'
                                        name='email'
                                        className='inputField xl:w-64 lg:w-4/5 sm-d:w-60 xs:w-40'
                                    >
                                    </Field><br></br>
                                    <ErrorMessage name='email' />
                                    <div className='text-center mt-5'>
                                        <button className='button1' type='submit' disabled={!formik.isValid || formik.isSubmitting} >
                                            {
                                                formik.isSubmitting ? 'Subscribing' : 'Subscribe'
                                            }
                                        </button>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </section>
        </>
    )
}


export default Subscribe;