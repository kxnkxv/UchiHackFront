import { FC, useState } from "react";
import { Avatar, Button, Col, Image, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import User from "../../store/user";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import {
  AUTH,
  NEW_QUESTION,
  PROFILE,
  REGISTRATION,
} from "../../constants/routes";
import Complete from "../Complete/Complete";
import Chat from "../../pages/Chat";
import { ReactComponent as ChatIcon } from "../../icons/message.svg";

import { ChatButton, Container, Controls, SearchWrap } from "./styled";

const HeaderNav: FC = observer(() => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChatHandler = () => setIsChatOpen(!isChatOpen);
  return (
    <Container>
      <SearchWrap>
        <Complete />
      </SearchWrap>
      <Controls>
        <ChatButton onClick={openChatHandler}>
          <ChatIcon />
        </ChatButton>
        <Link to={NEW_QUESTION}>
          <Button type="primary">Задать вопрос</Button>
        </Link>
        {User.user ? (
          <Link to={`${PROFILE}/${User.user.id}`}>
            {User.user.avatar ? (
              <Avatar src={User.user.avatar} />
            ) : (
              <Avatar icon={<UserOutlined />} />
            )}
          </Link>
        ) : (
          <>
            <Link to={AUTH}>
              <Button>Авторизация</Button>
            </Link>
            <Link to={REGISTRATION}>
              <Button>Регистрация</Button>
            </Link>
          </>
        )}
      </Controls>
      {isChatOpen && <Chat close={openChatHandler} />}
    </Container>
  );
});

export default HeaderNav;
