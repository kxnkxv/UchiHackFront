import React, {FC} from 'react';
import {RouteComponentProps} from "react-router-dom";
import {questionsList} from "../../mockData/questions";
import ThemeItem from "./components/ThemeItem/ThemeItem";
import {Row} from "antd";

import {
  Container,
  Heading,
  Count,
  List,

} from './styled';

interface RouteParams {
  themeId: string;
}

const Themes: FC<RouteComponentProps<RouteParams>> = ({match}) => {
  const {themeId} = match.params;
  return (
    <Container>
      <Row align='middle'>
        <Heading>Все вопросы</Heading>
        <Count>({questionsList.length})</Count>
      </Row>
      <List>
        {questionsList.map((question) => (!themeId || themeId === question.theme) && (
          <ThemeItem question={question}/>
        ))}
      </List>
    </Container>
  );
};

export default Themes;