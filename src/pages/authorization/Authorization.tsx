import React from 'react';
import Auth from "../../store/auth";
import {Button} from "antd";

const Authorization = () => {
  return (
    <div>
      Authorization
      <Button onClick={() => Auth.setIsUserAuth(true)}>войти</Button>
    </div>
  );
};

export default Authorization;