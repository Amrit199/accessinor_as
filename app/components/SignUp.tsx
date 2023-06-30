"use client"

import React, { useState } from 'react';
import { signupFields } from "./fromFeilds";
import FormAction from "./FormAction";
import Input from "./Input";

interface SignupState {
  [key: string]: string;
}

const fields = signupFields;
const fieldsState: SignupState = {};

fields.forEach(field => fieldsState[field.id] = '');

const Signup: React.FC = () => {
  const [signupState, setSignupState] = useState<SignupState>(fieldsState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  // Handle Signup API Integration here
  const createAccount = () => {
    // Implementation of createAccount function
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map(field => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
};

export default Signup;
