import React, {FC} from 'react';
import {QUESTION} from "../../../../constants/routes";
import {QuestionType} from "../../../../types/QuestionType";

import {
  Container,
  Description,
  Footer,
  Header,
  Title,
  ToAnswer,
  AnswersCount,
  Coast,
} from './styled';
import {questionsThemes} from "../../../../constants/questionsThemes";

interface OwnProps {
  question: QuestionType;
}

const ThemeItem: FC<OwnProps> = ({question}) => {
  const {title, id, theme, time, createdAt, description, status, coast, urgently, user} = question;
  return (
    <Container>
      <Header>
        <div>
          <Title>{questionsThemes[theme]}</Title>
        </div>
        <Title>Добавлено {createdAt.fromNow()}</Title>
      </Header>
      <Description to={`${QUESTION}/${id}`}>
        {description}
      </Description>
      <Footer>
        <Coast>{coast} баллов</Coast>
        {urgently && <Title urgently>Срочное</Title>}
        <Title>{time} минут</Title>
        <AnswersCount>0 ответов</AnswersCount>
        <ToAnswer to={`${QUESTION}/${id}`}>
          Ответить
        </ToAnswer>
      </Footer>
    </Container>
  );
};

export default ThemeItem;