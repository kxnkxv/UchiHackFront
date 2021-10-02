import React, { FC, useRef, useState } from "react";
import DialogsList from "./components/DialogsList";
import Dialog from "./components/Dialog";

import { ChatWrap, Close, Container, Header, Heading } from "./styled";
import { Button } from "antd";

interface OwnProps {
  close: () => void;
  publicChat?: boolean;
}

const dialogs = ["user1", "user2", "user3", "user4"];

const Chat: FC<OwnProps> = ({ close, publicChat }) => {
  const [isShowDialog, setIsShowDialog] = useState(!!publicChat);
  const dialogId = useRef(-1);
  const setIsShowDialogHandler =
    (id = -1) =>
    () => {
      dialogId.current = id;
      setIsShowDialog(!isShowDialog);
    };

  return (
    <Container>
      <Close onClick={close} />
      <ChatWrap>
        {isShowDialog ? (
          <Dialog
            publicChat={!!publicChat}
            data={dialogs[dialogId.current]}
            back={setIsShowDialogHandler()}
          />
        ) : (
          <>
            <Header>
              <Heading>Чат с пользователями</Heading>
              <Button onClick={close}>X</Button>
            </Header>
            <DialogsList openDialog={setIsShowDialogHandler} data={dialogs} />
          </>
        )}
      </ChatWrap>
    </Container>
  );
};

export default Chat;
