import React from 'react'
import Input from './Input';

const Controller = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} className='inputField'></Input>
        default: return null
    }

}

export default Controller