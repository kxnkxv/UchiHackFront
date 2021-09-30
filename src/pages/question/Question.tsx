import React, {FC} from 'react';
import {RouteComponentProps} from "react-router-dom";

interface RouteParams {
  questionId: string;
}

const Question: FC<RouteComponentProps<RouteParams>> = ({match}) => {
  const {questionId} = match.params;
  return (
    <div>
      Вопрос - {questionId}
    </div>
  );
};

export default Question;