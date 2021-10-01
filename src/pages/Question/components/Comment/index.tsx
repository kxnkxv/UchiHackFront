import {CommentType} from "../../../../types/AnswerType";
import React, {FC} from "react";
import {Row} from "antd";
import UserInfo from "../../../../components/UserInfo";

import {
  Container,
  Message
} from './styled';

interface OwnProps {
  data: CommentType;
}

const Comment: FC<OwnProps> = ({data}) => {
  const {user, createdAt, message} = data;
  return (
    <Container>
      <Row justify='space-between'>
        <UserInfo data={user} />
        <span> Добавлено {createdAt.fromNow()}</span>
      </Row>
      <Message>{message}</Message>
    </Container>
  );
};

export default Comment;