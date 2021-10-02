import React, { FC } from "react";
import logo from "../../../../img/logo.png";
import { UserAvatar } from "../../../../components/UserInfo/styled";

import { Container, Header, Item, Message, Name, Time } from "./styled";

interface OwnProps {
  data: any;
  openDialog: (i: number) => () => void;
}

const DialogsList: FC<OwnProps> = ({ data, openDialog }) => {
  return (
    <Container>
      {data.map((item: any, i: number) => (
        <Item onClick={openDialog(i)} key={item}>
          <UserAvatar src={logo} />
          <div style={{ width: "100%" }}>
            <Header>
              <Name>{item}</Name>
              <Time>14:00</Time>
            </Header>
            <Message>
              message message message messagemessage message message
              messagemessage message message message
            </Message>
          </div>
        </Item>
      ))}
    </Container>
  );
};

export default DialogsList;
