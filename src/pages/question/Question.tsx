import React, {FC} from 'react';
import {RouteComponentProps} from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";
import ThemeItem from "../Themes/components/ThemeItem/ThemeItem";
import {questionsList} from "../../mockData/questions";
import {answers} from "../../mockData/answers";
import {CommentType} from "../../types/AnswerType";

import {
  Container
} from './styled';

interface RouteParams {
  questionId: string;
}

const Question: FC<RouteComponentProps<RouteParams>> = ({match}) => {
  const {questionId} = match.params;
  const questionItem = questionsList.find(({id}) => id === questionId);
  return questionItem ? (
    <Container>
      <ThemeItem isQuestionPage question={questionItem} />
      <div>
        <h2>Ваш ответ</h2>
        <TextArea />
        <button>отправить</button>
      </div>
      <div>
        <h3>7 ответов</h3>
        <div>
          {
            answers.map(({user, id, createdAt, comments, message}) => (
              <div key={id}>
                <span>{user.firstName}</span>
                <br/>
                <span>{message}</span>
                <TextArea placeholder='добавить комментарий' />
                <div>
                  {
                    comments.map(({user, id, createdAt, message}: CommentType) => (
                      <div key={id}>
                        <span>{user.firstName}</span>
                        <span>добавлено {createdAt} минут назад</span>
                        <br/>
                        <span>{message}</span>
                      </div>
                    ))
                  }
                </div>
                <br/>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  ) : <span>нет такого вопроса</span>;
};

export default Question;