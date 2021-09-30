import React, {FC} from 'react';
import {QUESTION} from "../../../../constants/routes";
import {Question} from "../../../../types/Question";

import {Answer, Container, Description, DescriptionLink, Footer, Header, Title} from './styled';
import {questionsThemes} from "../../../../constants/questionsThemes";
import {Button} from 'antd';

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
        <Title>Добавлено {createdAt.fromNow()}</Title>
        {isQuestionPage && <Button>Общий чат</Button>}
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
        {urgently && <Title urgently>Срочное</Title>}
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