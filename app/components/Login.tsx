"use client"

import { useState } from 'react';
import Input from "./Input";
import { loginFields } from './fromFeilds';
import FormExtra from './FormExtra';
import FormAction from './FormAction';


const fields=loginFields;
let fieldsState : { [key: string]: string} = {};

fields.forEach(field => { 
    fieldsState[field.id]= '' ;
});

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }


    return(
        <form className="mt-8 space-y-6">
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

       <FormExtra />
       <FormAction handleSubmit={handleSubmit} text='Login' />

      </form>
    )
}