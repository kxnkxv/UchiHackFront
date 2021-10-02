import { Avatar, Button, Card, Col, Row, Tabs } from "antd";
import React, { FC } from "react";
import { UserOutlined } from "@ant-design/icons";
import Auth from "../../../../store/auth";
import User from "../../../../store/user";
import { questionsList } from "../../../../mockData/questions";
import ThemeItem from "../../../Themes/components/ThemeItem/ThemeItem";
import { List } from "../../../Themes/styled";

const { TabPane } = Tabs;

const PersonalPage: FC = () => {
  return (
    <Card>
      <Row gutter={[25, 25]} justify="space-around" align="middle">
        <Col>
          {User.user.avatar ? (
            <Avatar src={User.user.avatar} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
        </Col>
        <Col>
          {User.user.firstName +
            " " +
            User.user.lastName +
            " " +
            User.user.patronymic}
        </Col>
        <Col>{User.user.role}</Col>
        <Col>{User.user.education}</Col>
        <Col>Баланс: {User.user.balance}</Col>
        <Col>
          <Button danger onClick={() => Auth.setIsUserAuth(false)}>
            Выйти из аккаунта
          </Button>
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
  );
};

export default PersonalPage;
