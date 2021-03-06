import React, { FC, useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import ThemeItem from "./components/ThemeItem/ThemeItem";
import { Button, Col, Empty, Image, Row, Space } from "antd";
import { Container, Heading, Theme } from "./styled";
import { NEW_QUESTION, THEMES } from "../../constants/routes";
import { QuestionType } from "../../types/QuestionType";
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
        setThemes(res.data || []);
      });

    const questionsUrl = themeId
      ? `${URL}/questions/theme/${themeId}`
      : `${URL}/questions`;

    fetch(questionsUrl, {
      headers: {
        Authorization: `Bearer ${Auth.token.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setQuestionsByTheme(res.data || []);
      });
  }, [themeId]);

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
            <Heading>?????? ??????????????</Heading>
          </Row>
          <div>
            {questionsByTheme.map((question) => (
              <ThemeItem key={question.id} question={question} />
            ))}
          </div>
        </Container>
      );
    } else {
      return (
        <Empty
          description={
            <span>???????? ?? ???????? ?????????????? ?????? ?????????? ???????????? ???? ??????????????????</span>
          }
        >
          <Link to={NEW_QUESTION}>
            <Button type="primary">?? ???????? ????????????!</Button>
          </Link>
        </Empty>
      );
    }
  }
};

export default Themes;
