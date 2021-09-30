import React, {FC} from 'react';
import {QUESTION} from "../../../../constants/routes";
import {Question} from "../../../../types/Question";

import {
  Container,
  Header,
  Description,
  Footer,
  Answer,
  Title,
  DescriptionLink
} from './styled';
import {questionsThemes} from "../../../../constants/questionsThemes";

interface OwnProps {
  question: Question;
  isQuestionPage?: boolean;
}

const ThemeItem: FC<OwnProps> = ({question, isQuestionPage}) => {
  const {title, id, theme, time, createdAt, description, status, coast, urgently, user} = question;
  return (
    <Container>
      <Header>
        <div>
          {isQuestionPage && <Title bold>{title}</Title>}
          <Title>{questionsThemes[theme]}</Title>
        </div>
        <Title>добавлено {createdAt} минут назад</Title>
        {isQuestionPage && <button>общий чат</button>}
      </Header>
      {
        isQuestionPage
          ? <Description>{description}</Description>
          : (
            <DescriptionLink to={`${QUESTION}/${id}`}>
              <Description>{description}</Description>
            </DescriptionLink>
          )
      }
      <Footer>
        {isQuestionPage && <Title>{user.firstName}</Title>}
        <Title>{time} минут</Title>
        {urgently && <Title urgently>срочное</Title>}
        <Title>{coast} баллов</Title>
        {isQuestionPage
          ? <button>{status}</button>
          : <Answer to={`${QUESTION}/${id}`}>Ответить</Answer>
        }
      </Footer>
    </Container>
  );
};

export default ThemeItem;