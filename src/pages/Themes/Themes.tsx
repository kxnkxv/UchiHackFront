import React, {FC} from 'react';
import {RouteComponentProps} from "react-router-dom";
import {questionsList} from "../../mockData/questions";

import {
  Container,
} from './styled';
import ThemeItem from "./components/ThemeItem/Themes";

interface RouteParams {
  themeId: string;
}

const Themes: FC<RouteComponentProps<RouteParams>> = ({match}) => {
  const {themeId} = match.params;
  return (
    <Container>
      {questionsList.map(({title, theme, id}) => (!themeId || themeId === theme) && (
        <ThemeItem theme={theme} title={title} id={id} />
      ))}
    </Container>
  );
};

export default Themes;