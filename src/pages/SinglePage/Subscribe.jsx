import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import Controller from '../../components/Form/FormikController/Controller';

let initialValues = {
    email: ''
}
const Subscribe = () => {
    const validationSchema = Yup.object({
        email: Yup.string().email('invalid email').required('email is required')
    })
    const onSubmit = (values, onSubmitProps) => {
        console.log('submit')
        console.log('formValues', values)
        console.log(onSubmitProps)
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
        }, 2500)
    }
    return (
        <>
            <section className='mt-20 m-d:mt-5 m-d:w-full m-d:text-center'>
                <h1 className='sectionHeader bg-customGreen-200'>Subscribe</h1>
                <div className='h-52 shadow-customShadow mt-16 md:mt-10 flexCenter text-center rounded-md'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {
                            (formik) => (
                                <Form>
                                    <input
                                        type='email'
                                        placeholder='email'
                                        name='email'
                                        className='inputField xl:w-64 lg:w-4/5 sm-d:w-60 xs:w-40'
                                    >
                                    </input>
                                    <div className='text-center mt-5'>
                                        <button className='button1' type='submit' disabled={!formik.isValid || formik.isSubmitting}>
                                            {
                                                formik.isSubmitting ? 'Submitting' : 'Subscribe'
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