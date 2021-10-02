import React, {
  FC, useState,
} from 'react';
import Call from "./components/Call";

import {
  Container,
  ChatWrap,
  Close
} from  './styled';

interface OwnProps {
  close: () => void;
}

const Chat: FC<OwnProps> = ({close}) => {
  const [isOpenCall, setIsOpenCall] = useState(false);
  const setIsOpenCallHandler = () => setIsOpenCall(!isOpenCall);

  return (
    <Container>
      <Close onClick={close} />
      <ChatWrap>
        chat
        <button onClick={setIsOpenCallHandler}>звонок</button>
      </ChatWrap>
      {isOpenCall && <Call close={setIsOpenCallHandler} />}
    </Container>
  )
};

export default Chat;
