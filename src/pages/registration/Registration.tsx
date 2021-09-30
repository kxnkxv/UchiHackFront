import React from 'react';
import Auth from "../../store/auth";

const Registration = () => {
  return (
    <div>
      Registration
      <button onClick={() => Auth.setIsUserAuth(true)}>войти</button>
    </div>
  );
};

export default Registration;