import React, {FC} from 'react';

import {
  Container,
} from './styled';
import {QUESTION} from "../../../../constants/routes";

interface OwnProps {
  title: string;
  id: string;
  theme: string;
}

const ThemeItem: FC<OwnProps> = ({id, title, theme}) => {
  return (
    <Container to={`${QUESTION}/${id}`}>
      <span>{title}</span>
      <br/>
      <span>{theme}</span>
    </Container>
  );
};

export default ThemeItem;