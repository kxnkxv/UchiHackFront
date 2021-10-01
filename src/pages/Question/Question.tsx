import React, { FC } from "react";
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
  Coast,
  Container,
  Description,
  Footer,
  Header,
  PublicChat,
  QuestionTitle,
  QuestionWrap,
  Status,
  StyledTextArea,
  Submit,
  Title,
} from "./styled";

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
    coast,
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
          <Coast>{coast} баллов</Coast>
          <Status toRight>{status}</Status>
        </Footer>
      </QuestionWrap>
      <AddAnswer>
        <h2>Ваш ответ</h2>
        <StyledTextArea placeholder="Текстовое поле для ответа" />
        <Submit>Отправить</Submit>
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
