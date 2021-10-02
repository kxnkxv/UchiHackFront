import React, { FC, useState } from "react";
import Call from "../Call";
import { Button, Form, Input } from "antd";
import { Messages, Message, Header, MessageForm } from "./styled";
import UserInfo from "../../../../components/UserInfo";
import { users } from "../../../../mockData/users";

interface OwnProps {
  back: () => void;
  data: any;
  publicChat?: boolean;
}

const Dialog: FC<OwnProps> = ({ back, data, publicChat }) => {
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
      id: "123",
      owner: "user",
      text: "Сообщение",
    },
    {
      id: "1234",
      owner: "me",
      text: "Сообщение",
    },
    {
      id: "12345",
      owner: "user",
      text: "Сообщение",
    },
  ];

  return (
    <Messages>
      <Header>
        {!publicChat && <Button onClick={back}>{"<"}</Button>}
        <UserInfo data={users[0]} />
        {isOpenCall && <Call close={setIsOpenCallHandler} />}
        <Button onClick={setIsOpenCallHandler}>Позвонить</Button>
      </Header>
      {messagesMock.map(({ owner, text, id }) => (
        <Message key={id} myMessage={owner === "me"}>
          {text}
        </Message>
      ))}
      <MessageForm>
        <Form name="login" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Input.TextArea placeholder="Введите сообщение" />
          <Button type="primary">Отправить</Button>
        </Form>
      </MessageForm>
    </Messages>
  );
};

export default Dialog;
