import React, { useState, useEffect } from 'react';
import { validEmail, validPassword } from './regex';

const RegApp = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailErr, setEmailErr] = useState(false);
   const [pwdError, setPwdError] = useState(false);
   const validate = () => {
      if (!validEmail.test(email)) {
         setEmailErr(true);
      } else {
          localStorage.setItem('email', email)
      }
      if (!validPassword.test(password)) {
         setPwdError(true);
      } else {
          localStorage.setItem('password', password)
      }
   };
   
   return (
      <div>
         <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <div>
            <button onClick={validate}>Validate</button>
         </div>
         {console.log("Email -- ", emailErr)}
         {console.log("Pass -- ", pwdError)}
      </div>
   );
};
export default RegApp;