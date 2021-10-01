import React, { FC } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { RouteComponentProps } from "react-router-dom";
import { questionsList } from "../../mockData/questions";
import { answers } from "../../mockData/answers";
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
import { Card, Input } from "antd";

interface RouteParams {
  questionId: string;
}

const Question: FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const { questionId } = match.params;
  const questionItem = questionsList.find(({ id }) => id === questionId);
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
  } = questionItem as QuestionType;
  return questionItem ? (
    <Container>
      <QuestionWrap>
        <Header>
          <Title>
            <b>{questionsThemes[theme]}</b>
          </Title>
          <Title>
            Добавлено <b>{createdAt.fromNow()}</b>
          </Title>
          <PublicChat toRight>Общий чат</PublicChat>
        </Header>
        <QuestionTitle>{title}</QuestionTitle>
        <Description>{description}</Description>
        <Footer>
          <UserInfo data={user} />
          <Title>{time} минут</Title>
          {urgently && <Title>Срочное</Title>}
          <Cost>{cost} баллов</Cost>
          <Status toRight icon={<SyncOutlined spin />} color="processing">
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
    </Container>
  ) : (
    <NotFound />
  );
};

export default Question;
