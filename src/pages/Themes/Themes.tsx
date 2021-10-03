import React, { FC, useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import ThemeItem from "./components/ThemeItem/ThemeItem";
import { Button, Col, Empty, Image, Row, Space } from "antd";

import { Container, Heading, List, Theme } from "./styled";
import { NEW_QUESTION, THEMES } from "../../constants/routes";
import { QuestionType } from "../../types/QuestionType";
import axios from "axios";
import { URL } from "../../constants/API";
import Auth from "../../store/auth";

interface RouteParams {
  themeId: string;
}

const Themes: FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const { themeId } = match.params;
  const [questionsByTheme, setQuestionsByTheme] = useState<QuestionType[]>([]);
  const [themes, setThemes] = useState<any[]>([]);
  useEffect(() => {
    fetch(`${URL}/themes/`, {
      headers: {
        Authorization: `Bearer ${Auth.token.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setThemes(res.data);
      });
    if (themeId) {
      axios
        .request({
          method: "get",
          url: `${URL}/questions/theme/${themeId}`,
          headers: {
            Authorization: `Bearer ${Auth.token.accessToken}`,
          },
        })
        .then((r) => {
          if (r.data) {
            setQuestionsByTheme(r.data);
          }
        });
    }
  }, []);
  if (themeId === "allThemes") {
    return (
      <Row align="middle" justify="space-around">
        <Col>
          <Space wrap size={[25, 25]}>
            {themes.length !== 0
              ? themes.map((theme: { id: string; title: string }) => {
                  return (
                    <Link to={`${THEMES}/${theme.id}`} key={theme.id}>
                      <Theme>
                        <Image
                          src="https://picsum.photos/150/100"
                          preview={false}
                        />
                        {theme.title}
                      </Theme>
                    </Link>
                  );
                })
              : null}
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
