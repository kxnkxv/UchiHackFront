import React, {FC} from 'react';
import {QUESTION} from "../../../../constants/routes";
import {Question} from "../../../../types/Question";

import {Container, Description, DescriptionLink, Footer, Header, Title} from './styled';
import {questionsThemes} from "../../../../constants/questionsThemes";
import {Button, Tag} from 'antd';
import {Link} from 'react-router-dom';

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
          ? <Tag>{status}</Tag>
          : <Link to={`${QUESTION}/${id}`} style={{margin: "0 0 0 auto"}}><Button>Ответить</Button></Link>
        }
      </Footer>
    </Container>
  );
};

export default ThemeItem;