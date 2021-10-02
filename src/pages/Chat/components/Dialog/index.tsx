import React, { FC, useState } from "react";
import Call from "../Call";
import { Button, Col, Form, Input, Row } from "antd";
import { Messages } from "./styled";

interface OwnProps {
  back: () => void;
  data: any;
}

const Dialog: FC<OwnProps> = ({ back, data }) => {
  const [isOpenCall, setIsOpenCall] = useState(false);
  const setIsOpenCallHandler = () => setIsOpenCall(!isOpenCall);
  const onFinish = (values: any) => {
    // отправка сообющения
    console.log();
  };

  const onFinishFailed = (errorInfo: any) => {
    // ошибка при отправке
    console.log(errorInfo);
  };

  const messagesMock: any[] = [
    {
      owner: "user",
      text: "Сообщение",
    },
    {
      owner: "me",
      text: "Сообщение",
    },
    {
      owner: "user",
      text: "Сообщение",
    },
  ];

  return (
    <div>
      <Row align="middle" justify="space-around" gutter={[25, 25]}>
        <Col>{isOpenCall && <Call close={setIsOpenCallHandler} />}</Col>
        <Col>
          <Button onClick={back}>Назад</Button>
        </Col>
        <Col>{data}</Col>
        <Col>
          <Button onClick={setIsOpenCallHandler}>Позвонить</Button>
        </Col>
      </Row>
      <Row align="middle" justify="space-around" gutter={[25, 25]}>
        <Col>
          <Messages>
            {messagesMock.map((message) => {
              if (message.owner !== "me") {
                return <div>{message.text}</div>;
              } else {
                return <div>Моё {message.text}</div>;
              }
            })}
          </Messages>
        </Col>
      </Row>
      <Row align="middle" gutter={[25, 25]}>
        <Form name="login" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Col span={16}>
            <Input.TextArea placeholder="Введите сообщение" />
          </Col>
          <Col span={1}>
            <Button type="primary">Отправить</Button>
          </Col>
        </Form>
      </Row>
    </div>
  );
};

export default Dialog;
