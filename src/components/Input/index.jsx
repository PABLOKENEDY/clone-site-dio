import React from 'react';
import { Controller } from "react-hook-form";

import {InputText, InputContainer, IconContainer} from "./style";


const Input = ({leftIcon, name, control, ErroText ,erroMessege, ...rest}) => {
    return(
      <>
        <InputContainer>
        <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) =>  <InputText {...field} {...rest}/>}
      />
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
         
        </InputContainer>
        { erroMessege ? <ErroText>{erroMessege}</ErroText> : null}
        </>
    )
}

export { Input };