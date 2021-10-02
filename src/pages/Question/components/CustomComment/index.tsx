import { CommentType } from "../../../../types/AnswerType";
import React, { FC } from "react";
import { Avatar, Comment, Tooltip } from "antd";
import { PROFILE } from "../../../../constants/routes";
import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

interface OwnProps {
  data: CommentType;
}

const CustomComment: FC<OwnProps> = ({ data }) => {
  return (
    <Comment
      author={
        <a href={`${PROFILE}/${data.user.id}`}>
          {data.user.firstName + " " + data.user.lastName}
        </a>
      }
      avatar={
        <Avatar
          src={data.user.avatar}
          alt={data.user.firstName + " " + data.user.lastName}
        />
      }
      content={<p>{data.message}</p>}
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default CustomComment;
