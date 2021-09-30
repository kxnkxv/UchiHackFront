import React from 'react';
import Auth from "../../store/auth";

const Authorization = () => {
  return (
    <div>
      Authorization
      <button onClick={() => Auth.setIsUserAuth(true)}>войти</button>
    </div>
  );
};

export default Authorization;