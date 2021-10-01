import TextArea from "antd/lib/input/TextArea";
import {AnswerType, CommentType} from "../../../../types/AnswerType";
import React, {FC} from "react";
import Comment from "../Comment";
import UserInfo from "../../../../components/UserInfo";
import {Row} from "antd";
import {ReactComponent as HeartIcon} from '../../../../img/heart.svg';

import {
  Container,
  MessageWrap,
  Message,
  AddComment,
  OpenComment,
  Like
} from './styled'
import {PublicChat, Status, Title} from "../../styled";

interface OwnProps {
  data: AnswerType;
}

const Answer: FC<OwnProps> = ({data}) => {
  const {user, message, comments, isRightAnswer, createdAt} = data;
  return (
    <Container>
      <Row align='middle' justify='space-between'>
        <UserInfo data={user} />
        <Status>{isRightAnswer ? 'решение' : 'не решение'}</Status>
        <Title>Добавлено <b>{createdAt.fromNow()}</b></Title>
        <PublicChat>Чат с участником</PublicChat>
      </Row>
      <MessageWrap>
        <Message>{message}</Message>
        <Row justify='space-between'>
          <OpenComment>{comments.length} комментария</OpenComment>
          <Like>
            <HeartIcon />
          </Like>
        </Row>
        <AddComment placeholder='Комментировать ответ'/>
        <div>
          {
            comments.map((comment: CommentType) => (
              <Comment key={comment.id} data={comment} />
            ))
          }
        </div>
      </MessageWrap>
    </Container>
  );
};

export default Answer;