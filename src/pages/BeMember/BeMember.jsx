import React, { useState } from 'react'
import SignUp from '../../components/Form/SignUp';
import Login from '../../components/Form/Login';

const BeMember = () => {
    const [active, setActive] = useState(true);
    const signUp = () => {
        setActive(true);
    }
    const login = () => {
        setActive(false);
    }
    return (
        <>
            <div className='flexCenter h-screen bg-myImg  bg-cover'>
                <div className='min-h-formHeight bg-darkTransparent w-fcDetail rounded-md p-12 m-d:p-10 m-d:w-formMW xs:w-64'>
                    <div className='flexCenter text-white rounded-md overflow-hidden h-10 xs:h-6'>
                        <div className={`loginSignUp ${active ? 'bg-customGreen-300' : ''}`} onClick={signUp} >
                            Sign In
                        </div>
                        <div className={`loginSignUp ${active ? '' : 'bg-customGreen-300 '}`} onClick={login}>
                            Log In
                        </div>
                    </div>
                    <div className='mt-9 xs:mt-5 flexCenter min-h-customHeight'>
                        {
                            active ? <SignUp /> : <Login />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BeMember;