import React from 'react';
import Auth from "../../store/auth";
import {Button} from "antd";

const Registration = () => {
  return (
    <div>
      Registration
      <Button onClick={() => Auth.setIsUserAuth(true)}>войти</Button>
    </div>
  );
};

export default Registration;