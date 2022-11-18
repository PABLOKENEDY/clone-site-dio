import React from 'react';

import {InputText, InputContainer, IconContainer} from "./style-css";

const Input = ({leftIcon, name, control, ...rest}) => {
    return(
        <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <InputText {...rest}/>
        </InputContainer>
    )
}

export { Input };