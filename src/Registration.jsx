import React from "react";
import { useState } from "react";
import FormFields from "./components/FormFields";




const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGen] = useState("");

  function handleClick() {
    console.log(name, " ", email, " ", password, " ", mobile, " ", age, " ", gender)
  }

  return (
    <>
      <form method="post">
        <FormFields
          labelFor="name"
          labelText="Name : "
          inputType="text"
          inputName="name"
          inputId="name"
          inputPlaceholder="Enter your name"
          onChange={(e) => setName({name: e.target.value})}
        />

        <FormFields
            labelFor="email"
            labelText="Email Id : "
            inputType="text"
            inputName="email"
            inputId="email"
            inputPlaceholder="Enter your mailid"
          onChange={(e) => setEmail({email: e.target.value})}
        />

        <FormFields
            labelFor="password"
            labelText="Password : "
            inputType="password"
            inputName="password"
            inputId="password"
            inputPlaceholder="**********"
          onChange={(e) => setPass({password: e.target.value})}
        />

        <FormFields
            labelFor="conf_pass"
            labelText="Confirm password : "
            inputType="password"
            inputName="conf_pass"
            inputId="password"
            inputPlaceholder="**********"
        />

        <FormFields
          labelFor="mobile"
          labelText="Mobile number : "
          inputType="text"
          inputName="number"
          inputId="mobile"
          inputPlaceholder="+91 1234567890"
          onChange={(e) => setMobile({mobile: e.target.value})}
        />

        <FormFields
            labelFor="dob"
            labelText="Date of birth : "
            inputType="date"
            inputName="dob"
            inputId="dob"
          onChange={(e) => setAge({age: e.target.value})}
        />

        <FormFields
            labelFor="gender"
            labelText="Gender : "
            inputType="radio"
            inputName="gender"
            inputId="male"
            inputValue="male"

            inputType2="radio"
            inputName2="gender"
            inputId2="female"
            inputValue2="female"
          onChange={(e) => setGen({gender: e.target.value})}
        />

        <FormFields
            inputType="button"
            inputName="submit"
            inputId="submit"
            onClick={handleClick()}
        />

        Already have an account? <a href="#">Login</a>
      </form>
    </>
  );
};

export default Registration;
