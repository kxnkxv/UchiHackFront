import { AnswerType, CommentType } from "../../../../types/AnswerType";
import React, { FC } from "react";
import CustomComment from "../CustomComment";
import UserInfo from "../../../../components/UserInfo";
import { Button, Input, Row } from "antd";

import { Container, Message, MessageWrap, OpenComment } from "./styled";
import { PublicChat, Status, Title } from "../../styled";
import { CheckCircleOutlined, HeartOutlined } from "@ant-design/icons";

interface OwnProps {
  data: AnswerType;
}

const Answer: FC<OwnProps> = ({ data }) => {
  const { user, message, comments, isRightAnswer, createdAt } = data;
  return (
    <Container>
      <Row align="middle" justify="space-between">
        <UserInfo data={user} />
        {isRightAnswer ? (
          <Status icon={<CheckCircleOutlined />} color="success">
            Ответ является решением
          </Status>
        ) : null}
        <Title>
          Добавлено <b>{createdAt.fromNow()}</b>
        </Title>
        <PublicChat>Чат с участником</PublicChat>
      </Row>
      <MessageWrap>
        <Message>{message}</Message>
        <Row justify="space-between">
          <OpenComment>{comments.length} комментария</OpenComment>
          <Button shape="circle" icon={<HeartOutlined />} />
        </Row>
        <Input.TextArea placeholder="Комментировать ответ" />
        <div>
          {comments.map((comment: CommentType) => (
            <CustomComment key={comment.id} data={comment} />
          ))}
        </div>
      </MessageWrap>
    </Container>
  );
};

export default Answer;
