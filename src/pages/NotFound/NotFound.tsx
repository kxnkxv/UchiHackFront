import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Кажется такой страницы не существует"
      extra={
        <Link to="/">
          <Button type="primary">Вернуться на главную</Button>
        </Link>
      }
    />
  );
};

export default NotFound;
