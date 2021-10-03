import { Avatar, Button, Card, Col, Row, Tabs } from "antd";
import React, { FC, useEffect, useState } from "react";
// import { users } from "../../../mockData/users";
import { UserType } from "../../../types/UserType";
import { UserOutlined } from "@ant-design/icons";
// import { questionsList } from "../../../mockData/questions";
import ThemeItem from "../../Themes/components/ThemeItem/ThemeItem";
import { List } from "../../Themes/styled";
import NotFound from "../../NotFound/NotFound";
import { QuestionType } from "../../../types/QuestionType";
import { AnswerType } from "../../../types/AnswerType";
import Answer from "../../Question/components/Answer";
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
  const [answers, setAnswers] = useState<AnswerType[]>([]);

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

  useEffect(() => {
    //  TODO: получить список вопросов (и отдельно ответов) + юзера
    getUserById(userId);
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
              {questions
                ? questions.map((question: QuestionType) => (
                    <ThemeItem question={question} />
                  ))
                : null}
            </List>
          </TabPane>
          <TabPane tab="Ответы" key="2">
            {answers
              ? answers.map((answer: AnswerType) => (
                  <Answer key={answer.id} data={answer} />
                ))
              : null}
          </TabPane>
        </Tabs>
      </Row>
    </Card>
  ) : (
    <NotFound />
  );
};

export default PublicProfile;
