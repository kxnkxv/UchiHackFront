import { Avatar, Button, Card, Col, Row, Tabs } from "antd";
import React, { FC, useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import Auth from "../../../../store/auth";
import User from "../../../../store/user";
// import { questionsList } from "../../../../mockData/questions";
import ThemeItem from "../../../Themes/components/ThemeItem/ThemeItem";
import { List } from "../../../Themes/styled";
import { QuestionType } from "../../../../types/QuestionType";
import Answer from "../../../Question/components/Answer";
import { AnswerType } from "../../../../types/AnswerType";

const { TabPane } = Tabs;

const PersonalPage: FC = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    //  TODO: получить список вопросов (и отдельно ответов) юзера
  }, []);

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
              {questions
                ? questions.map((question: QuestionType) => (
                    <ThemeItem question={question} />
                  ))
                : null}
            </List>
          </TabPane>
          <TabPane tab="Ответы" key="2">
            <List>
              {answers
                ? answers.map((answer: AnswerType) => (
                    <Answer key={answer.id} data={answer} />
                  ))
                : null}
            </List>
          </TabPane>
        </Tabs>
      </Row>
    </Card>
  );
};

export default PersonalPage;
