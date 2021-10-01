import React, { FC } from "react";
import { UserType } from "../../types/UserType";
import logo from "./../../img/logo.png";

import { Container, UserAvatar, UserName } from "./styled";
import { PROFILE } from "../../constants/routes";

interface OwnProps {
  data: UserType;
}

const UserInfo: FC<OwnProps> = ({ data }) => {
  const { firstName } = data;
  return (
    <Container>
      <a href={`${PROFILE}/${data.id}`}>
        <UserAvatar src={logo} />
        <UserName>{firstName}</UserName>
      </a>
    </Container>
  );
};

export default UserInfo;
