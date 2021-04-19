import React, { Component } from "react";
import { useState, useEffect } from "react";
import FormFields from "./components/FormFields";
import { validateName, validateMobile, validateEmail } from './components/RegEx';
// import FormSubmitField from "./components/FormSubmitField";
// import DisplayData from "./components/DisplayData";


const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGen] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  // const { register, handleRegister } = useForm();

  function handleSubmit(e) {
    // console.log(name)
    console.log("Errs -- ",nameErr, emailErr, mobileErr)
    if(nameErr) {
      console.log(nameErr)
    } else {
      localStorage.setItem('name', name.name);
    }
    if(emailErr !== true) {
      localStorage.setItem('email', email.email);
    } else {
      console.log(emailErr)
    }

    if(mobileErr !== true) {
      localStorage.setItem('mobile', mobile.mobile);
    } else {
      console.log(mobileErr)
    }


    localStorage.setItem('password', password.password);
    localStorage.setItem('age', age.age);
    localStorage.setItem('gender', gender.gender);

    validations();
    e.preventDefault();
  }

  function validations() {
    console.log("valid Name test with function  -- ", validateName.test(name))
    console.log(name);
    if(validateName.test(name)) {
      console.log("Name err if -- ",validateName.test(name))
    } else {
      // setNameErr(false)
      console.log("Name err else -- ",validateName.test(name))
      // console.log(nameErr)
    }

    if(validateMobile.test(mobile)) {
      setMobileErr(true); 
    }

    if(validateEmail.test(email)) {
      setEmailErr(true); 
    }
  }

  useEffect(() => {
    const ls_name = localStorage.getItem('name');
    console.log("ls name -- ", ls_name);
  })

  // const onSubmit = data => {
  //   // this.props.handleData(data)
  //   alert(data)
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <br/>
        <input type="submit" value="Submit"/>
<br/>
        {/* <FormSubmitField
            inputType="submit"
            inputValue="submit"
        /> */}

        Already have an account? <a href="#">Login</a>
      </form>

      {nameErr && <p>Name invalid</p>}
      {mobileErr && <p>Mobile invalid</p>}
      {emailErr && <p>Email invalid</p>}
    </>
  );
};

export default Registration;
