import React, {FC} from 'react';
import {RouteComponentProps} from "react-router-dom";
import {questionsList} from "../../mockData/questions";

import {Container,} from './styled';
import ThemeItem from "./components/ThemeItem/ThemeItem";

interface RouteParams {
  themeId: string;
}

const Themes: FC<RouteComponentProps<RouteParams>> = ({match}) => {
  const {themeId} = match.params;
  return (
    <Container>
      {questionsList.map((question) => (!themeId || themeId === question.theme) && (
        <ThemeItem question={question}/>
      ))}
    </Container>
  );
};

export default Themes;