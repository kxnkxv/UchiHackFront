import React, { FC, useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
// import { questionsList } from "../../mockData/questions";
import ThemeItem from "./components/ThemeItem/ThemeItem";
import { Button, Col, Empty, Image, Row, Space } from "antd";

import { Container, Heading, List, Theme } from "./styled";
import { questionsThemes } from "../../constants/questionsThemes";
import { NEW_QUESTION, THEMES } from "../../constants/routes";
import { QuestionType } from "../../types/QuestionType";

interface RouteParams {
  themeId: string;
}

const Themes: FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const { themeId } = match.params;
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [questionsByTheme, setQuestionsByTheme] = useState<QuestionType[]>([]);
  useEffect(() => {
    //  TODO: получить список вопросов (и отдельно ответов) + юзера
  }, []);
  if (themeId === "allThemes") {
    return (
      <Row align="middle" justify="space-around">
        <Col>
          <Space wrap size={[25, 25]}>
            {Object.keys(questionsThemes).map((key) => (
              <Link to={`${THEMES}/${key}`} key={key}>
                <Theme>
                  <Image src="https://picsum.photos/150/100" preview={false} />
                  {/* @ts-ignore */}
                  {questionsThemes[key]}
                </Theme>
              </Link>
            ))}
          </Space>
        </Col>
      </Row>
    );
  } else {
    if (questionsByTheme.length !== 0) {
      return (
        <Container>
          <Row align="middle">
            <Heading>Все вопросы</Heading>
          </Row>
          <List>
            {questionsByTheme.map((question) => (
              <ThemeItem key={question.id} question={question} />
            ))}
          </List>
        </Container>
      );
    } else {
      return (
        <Empty
          description={
            <span>Пока в этом разделе ещё никто ничего не спрашивал</span>
          }
        >
          <Link to={NEW_QUESTION}>
            <Button type="primary">Я буду первым!</Button>
          </Link>
        </Empty>
      );
    }
  }
};

export default Themes;
