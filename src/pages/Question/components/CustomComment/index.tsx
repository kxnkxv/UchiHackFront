import { CommentType } from "../../../../types/AnswerType";
import React, { FC } from "react";
import { Avatar, Comment, Tooltip } from "antd";
import moment from "moment";
import { PROFILE } from "../../../../constants/routes";

interface OwnProps {
  data: CommentType;
}

const CustomComment: FC<OwnProps> = ({ data }) => {
  const { user, message } = data;
  return (
    <Comment
      author={
        <a href={`${PROFILE}/${user.id}`}>
          {user.firstName + " " + user.lastName}
        </a>
      }
      avatar={
        <Avatar src={user.avatar} alt={user.firstName + " " + user.lastName} />
      }
      content={<p>{message}</p>}
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default CustomComment;
