import { Avatar, Button, Card, Col, Empty, Row, Tabs } from "antd";
import React, { FC, useEffect, useState } from "react";
import { UserType } from "../../../types/UserType";
import { UserOutlined } from "@ant-design/icons";
import ThemeItem from "../../Themes/components/ThemeItem/ThemeItem";
import { List } from "../../Themes/styled";
import NotFound from "../../NotFound/NotFound";
import { QuestionType } from "../../../types/QuestionType";
import { AnswerType } from "../../../types/AnswerType";
import axios from "axios";
import { URL } from "../../../constants/API";
import Auth from "../../../store/auth";

const { TabPane } = Tabs;

interface PublicProfileProps {
  userId: any;
}

const PublicProfile: FC<PublicProfileProps> = ({ userId }) => {
  // @ts-ignore
  const [currentUser, setCurrentUser] = useState<UserType>(null);
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const answers = [];
  const questionsId: string[] = [];

  const getUserById = (id: string) => {
    axios
      .request<UserType>({
        method: "get",
        url: `${URL}/users/${id}`,
        headers: {
          Authorization: `Bearer ${Auth.token.accessToken}`,
        },
      })
      .then((r) => setCurrentUser(r.data));
  };

  const getQuestionsByUserId = (id: string) => {
    axios
      .request<QuestionType[]>({
        method: "get",
        url: `${URL}/questions/`,
        headers: {
          Authorization: `Bearer ${Auth.token.accessToken}`,
        },
      })
      .then((r) => {
        const filtered = r.data.filter((question) => id !== question.user.id);
        setQuestions(filtered);
      });
  };

  const getAnswersByUserId = () => {
    questionsId.map((id) => {
      axios
        .request<AnswerType>({
          method: "get",
          url: `${URL}/answers/question/${id}/`,
          headers: {
            Authorization: `Bearer ${Auth.token.accessToken}`,
          },
        })
        .then((r) => answers.push(r.data));
    });
  };

  useEffect(() => {
    getUserById(userId);
    getQuestionsByUserId(userId);
    getAnswersByUserId();
  }, []);
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
              {questions.length === 0 ? (
                questions.map((question: QuestionType) => {
                  questionsId.push(question.id);
                  return <ThemeItem question={question} />;
                })
              ) : (
                <Empty />
              )}
            </List>
          </TabPane>
          <TabPane tab="Ответы" key="2">
            {/*{answers*/}
            {/*  ? Object.keys(answers).map((answer) => (*/}
            {/*      <Answer key={answer.id} data={answer} />*/}
            {/*    ))*/}
            {/*  : <Empty/>}*/}
          </TabPane>
        </Tabs>
      </Row>
    </Card>
  ) : (
    <NotFound />
  );
};

export default PublicProfile;
