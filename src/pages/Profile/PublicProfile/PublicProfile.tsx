import { Avatar, Button, Card, Col, Row, Tabs } from "antd";
import React, { FC } from "react";
import { users } from "../../../mockData/users";
import { UserType } from "../../../types/UserType";
import { UserOutlined } from "@ant-design/icons";
import { questionsList } from "../../../mockData/questions";
import ThemeItem from "../../Themes/components/ThemeItem/ThemeItem";
import { List } from "../../Themes/styled";
import NotFound from "../../NotFound/NotFound";

const { TabPane } = Tabs;

interface PublicProfileProps {
  userId: any;
}

const PublicProfile: FC<PublicProfileProps> = ({ userId }) => {
  const currentUser = users.find(({ id }) => id === userId) as UserType;

  return currentUser ? (
    <Card>
      <Row gutter={[25, 25]} justify="space-around" align="middle">
        <Col>
          {currentUser.avatar ? (
            <Avatar src={currentUser.avatar} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
        </Col>
        <Col>
          {currentUser.firstName +
            " " +
            currentUser.lastName +
            " " +
            currentUser.patronymic}
        </Col>
        <Col>{currentUser.role}</Col>
        <Col>{currentUser.education}</Col>
        <Col>Баланс: {currentUser.balance}</Col>
        <Col>
          <Button>Начать диалог</Button>
        </Col>
      </Row>
      <Row gutter={[25, 25]} justify="space-around" align="middle">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Вопросы" key="1">
            <List>
              {questionsList.map((question) => (
                <ThemeItem question={question} />
              ))}
            </List>
          </TabPane>
          <TabPane tab="Ответы" key="2">
            {questionsList.map((question) => (
              <ThemeItem question={question} />
            ))}
          </TabPane>
        </Tabs>
      </Row>
    </Card>
  ) : (
    <NotFound />
  );
};

export default PublicProfile;
