import React, { FC, useEffect, useState } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { RouteComponentProps } from "react-router-dom";
// import { questionsList } from "../../mockData/questions";
// import { answers } from "../../mockData/answers";
import { QuestionType } from "../../types/QuestionType";
import Answer from "./components/Answer";
import NotFound from "../NotFound/NotFound";
import { questionsThemes } from "../../constants/questionsThemes";
import UserInfo from "../../components/UserInfo";

import {
  AddAnswer,
  Container,
  Cost,
  Description,
  Footer,
  Header,
  PublicChat,
  QuestionTitle,
  QuestionWrap,
  Status,
  Submit,
  Title,
} from "./styled";
import { Card, Input, Tooltip } from "antd";
import moment from "moment";

import "moment/locale/ru";
import Chat from "../Chat";
import { AnswerType } from "../../types/AnswerType";

moment.locale("ru");

interface RouteParams {
  questionId: string;
}

const Question: FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  // @ts-ignore
  const [question, setQuestion] = useState<QuestionType>(null);
  const [answers, setAnswers] = useState<AnswerType[]>([]);
  useEffect(() => {
    //  TODO: получить вопрос о id
  }, []);
  const { questionId } = match.params;
  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChatHandler = () => setIsChatOpen(!isChatOpen);
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
  } = question;
  return question ? (
    <Container>
      <QuestionWrap>
        <Header>
          <Title>
            <b>{questionsThemes[theme]}</b>
          </Title>
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <Title>
              Добавлено <b>{createdAt.fromNow()}</b>
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
        <Card>
          <h2>Ваш ответ</h2>
          <Input.TextArea placeholder="Текстовое поле для ответа" />
          <Submit type="primary">Отправить</Submit>
        </Card>
      </AddAnswer>
      <div>
        <h3>Ответов - {answers.length}</h3>
        <div>
          {answers.map((answer) => (
            <Answer key={answer.id} data={answer} />
          ))}
        </div>
      </div>
      {isChatOpen && <Chat publicChat close={openChatHandler} />}
    </Container>
  ) : (
    <NotFound />
  );
};

export default Question;
