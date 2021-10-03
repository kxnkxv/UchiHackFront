import React, { FC } from "react";
import { QUESTION } from "../../../../constants/routes";
import { QuestionType } from "../../../../types/QuestionType";
import {
  AnswersCount,
  Coast,
  Container,
  Description,
  Footer,
  Header,
  Title,
  ToAnswer,
} from "./styled";
import { questionsThemes } from "../../../../constants/questionsThemes";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

interface OwnProps {
  question: QuestionType;
}

const ThemeItem: FC<OwnProps> = ({ question }) => {
  const { id, theme, time, createdAt, description, cost, urgently } = question;
  return (
    <Container>
      <Header>
        <div>
          <Title bold>{questionsThemes[theme]}</Title>
        </div>
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <Title small>
            Добавлено <b>{createdAt.fromNow()}</b>
          </Title>
        </Tooltip>
      </Header>
      <Description to={`${QUESTION}/${id}`}>{description}</Description>
      <Footer>
        <Coast>{cost} баллов</Coast>
        {urgently && <Title urgently>Срочное</Title>}
        <Title>{time} минут</Title>
        <AnswersCount>0 ответов</AnswersCount>
        <Link to={`${QUESTION}/${id}`}>
          <ToAnswer type="primary">Ответить</ToAnswer>
        </Link>
      </Footer>
    </Container>
  );
};

export default ThemeItem;
