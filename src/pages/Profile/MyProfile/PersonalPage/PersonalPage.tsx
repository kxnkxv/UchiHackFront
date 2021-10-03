import { Avatar, Button, Card, Col, Empty, Row, Tabs } from "antd";
import React, { FC, useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import Auth from "../../../../store/auth";
import User from "../../../../store/user";
import ThemeItem from "../../../Themes/components/ThemeItem/ThemeItem";
import { List } from "../../../Themes/styled";
import { QuestionType } from "../../../../types/QuestionType";
import Answer from "../../../Question/components/Answer";
import { AnswerType } from "../../../../types/AnswerType";
import axios from "axios";
import { URL } from "../../../../constants/API";
import { removeStorageItem } from "../../../../utils/localStorage";

const { TabPane } = Tabs;

const PersonalPage: FC = () => {
  // @ts-ignore
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  const getQuestionsByUserId = (id: string) => {
    // questions
    fetch(`${URL}/questions/user/${id}`, {
      headers: {
        Authorization: `Bearer ${Auth.token.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res.data);
      });
  };

  const getAnswersByUserId = (id: string) => {
    fetch(`${URL}/answers/user/${id}`, {
      headers: {
        Authorization: `Bearer ${Auth.token.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setAnswers(res.data);
      });
  };

  useEffect(() => {
    getQuestionsByUserId(User.user.id || "");
    getAnswersByUserId(User.user.id || "");
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
          <Button
            danger
            onClick={() => {
              Auth.setIsUserAuth(false);
              removeStorageItem("user");
              removeStorageItem("token");
            }}
          >
            Выйти из аккаунта
          </Button>
        </Col>
      </Row>
      <Row gutter={[25, 25]} justify="space-around" align="middle">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Вопросы" key="1">
            <List>
              {questions && questions.length !== 0 ? (
                questions &&
                questions.map((question: QuestionType) => {
                  return <ThemeItem question={question} />;
                })
              ) : (
                <Empty />
              )}
            </List>
          </TabPane>
          <TabPane tab="Ответы" key="2">
            {answers && answers.length !== 0 ? (
              answers &&
              answers.map((answer) => <Answer key={answer.id} data={answer} />)
            ) : (
              <Empty />
            )}
          </TabPane>
        </Tabs>
      </Row>
    </Card>
  );
};

export default PersonalPage;
