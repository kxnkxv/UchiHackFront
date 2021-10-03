import React, { FC, useEffect, useState } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { RouteComponentProps } from "react-router-dom";
import { QuestionType } from "../../types/QuestionType";
import Answer from "./components/Answer";
import NotFound from "../NotFound/NotFound";
import UserInfo from "../../components/UserInfo";
import User from "../../store/user";
import { v4 as uuid } from "uuid";

import {
  AddAnswer,
  AnswersWrap,
  Container,
  Cost,
  Description,
  Footer,
  Grid,
  Header,
  PublicChat,
  QuestionTitle,
  QuestionWrap,
  Status,
  Submit,
  Title,
} from "./styled";
import { Input, Tooltip } from "antd";
import moment from "moment";

import "moment/locale/ru";
import Chat from "../Chat";
import { AnswerType } from "../../types/AnswerType";
import axios from "axios";
import { URL } from "../../constants/API";
import Auth from "../../store/auth";

moment.locale("ru");

interface RouteParams {
  questionId: string;
}

const Question: FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  // @ts-ignore
  const [question, setQuestion] = useState<QuestionType>(null);
  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const { questionId } = match.params;
  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChatHandler = () => setIsChatOpen(!isChatOpen);
  const [answerBody, setAnswerBody] = useState({
    id: uuid(),
    message: "string",
    question: questionId,
    user: User.user.id,
    createdAt: "2021-10-03T03:52:07.518Z",
    updatedAt: "2021-10-03T03:52:07.518Z",
  });

  const setAnswerBodyHandler = (ev: React.ChangeEvent) => {
    const { value } = ev.target as HTMLTextAreaElement;
    setAnswerBody((prevState) => ({ ...prevState, message: value }));
  };

  const {
    title,
    theme,
    description,
    user,
    time,
    cost,
    status,
    createdAt,
    urgently,
  } = question || {};

  const createAnswerHandler = () => {
    fetch(`${URL}/answers/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Auth.token.accessToken}`,
      },

      body: JSON.stringify(answerBody),
    }).then((res) => {
      //answers
      fetch(`${URL}/answers/question/${questionId}`, {
        headers: {
          Authorization: `Bearer ${Auth.token.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setAnswers(res.data);
        });
    });
  };

  useEffect(() => {
    // questions
    fetch(`${URL}/questions/${questionId}`, {
      headers: {
        Authorization: `Bearer ${Auth.token.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setQuestion(res);
      });

    //answers
    fetch(`${URL}/answers/question/${questionId}`, {
      headers: {
        Authorization: `Bearer ${Auth.token.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setAnswers(res.data);
      });
  }, []);

  return question ? (
    <Container>
      <Grid>
        <QuestionWrap>
          <Header>
            <Title>
              <b>{question.theme}</b>
            </Title>
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <Title>
                Добавлено <b>{createdAt}</b>
              </Title>
            </Tooltip>
            <PublicChat onClick={openChatHandler}>Общий чат</PublicChat>
          </Header>
          <QuestionTitle>{title}</QuestionTitle>
          <Description>{description}</Description>
          <Footer>
            <UserInfo data={user} />
            <Title>{time} минут</Title>
            {urgently && <Title>Срочное</Title>}
            <Cost>{cost} баллов</Cost>
            <Status icon={<SyncOutlined spin />} color="processing">
              {status}
            </Status>
          </Footer>
        </QuestionWrap>
        <AddAnswer>
          <div>
            <h2>Ваш ответ</h2>
            <Input.TextArea
              onChange={setAnswerBodyHandler}
              placeholder="Текстовое поле для ответа"
            />
            <Submit onClick={createAnswerHandler} type="primary">
              Отправить
            </Submit>
          </div>
        </AddAnswer>
      </Grid>
      <AnswersWrap>
        <Grid>
          <h3>{answers.length} ответ</h3>
          <div>
            {answers.map((answer) => (
              <Answer key={answer.id} data={answer} />
            ))}
          </div>
        </Grid>
      </AnswersWrap>
      {isChatOpen && <Chat publicChat close={openChatHandler} />}
    </Container>
  ) : (
    <NotFound />
  );
};

export default Question;
