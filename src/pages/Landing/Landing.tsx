import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { AUTH, REGISTRATION } from "../../constants/routes";

const Landing = () => {
  return (
    <div>
      <Link to={AUTH}>
        <Button>Авторизация</Button>
      </Link>
      <Link to={REGISTRATION}>
        <Button>Регистрация</Button>
      </Link>
    </div>
  );
};

export default Landing;
