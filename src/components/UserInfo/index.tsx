import React, { FC } from "react";
import { UserType } from "../../types/UserType";

import { Container, UserName } from "./styled";
import { PROFILE } from "../../constants/routes";
import User from "../../store/user";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface OwnProps {
  data: UserType;
}

const UserInfo: FC<OwnProps> = ({ data }) => {
  return !data ? (
    <span>аноним</span>
  ) : (
    <Container>
      <a href={`${PROFILE}/${data.id}`}>
        {User.user.avatar ? (
          <Avatar src={User.user.avatar} />
        ) : (
          <Avatar icon={<UserOutlined />} />
        )}
        <UserName>{data.firstName}</UserName>
      </a>
    </Container>
  );
};

export default UserInfo;
