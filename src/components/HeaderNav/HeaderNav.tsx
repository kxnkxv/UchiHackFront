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

import { ChatButton } from "./styled";

const HeaderNav: FC = observer(() => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChatHandler = () => setIsChatOpen(!isChatOpen);
  return (
    <>
      <Row
        gutter={[25, 25]}
        align="middle"
        justify={"space-between"}
        style={{
          padding: 0,
          margin: 0,
          paddingTop: 5,
          height: 80,
        }}
      >
        <Col
          span={12}
          style={{
            paddingLeft: 0,
            marginLeft: 0,
          }}
        >
          <Row
            gutter={[25, 25]}
            align="middle"
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            <Col span={19}>
              <Complete />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row
            gutter={[25, 25]}
            align="middle"
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            <ChatButton onClick={openChatHandler}>
              <ChatIcon />
            </ChatButton>
            <Col>
              <Link to={NEW_QUESTION}>
                <Button type="primary">Задать вопрос</Button>
              </Link>
            </Col>
            <Col>
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
            </Col>
          </Row>
        </Col>
      </Row>
      {isChatOpen && <Chat close={openChatHandler} />}
    </>
  );
});

export default HeaderNav;
