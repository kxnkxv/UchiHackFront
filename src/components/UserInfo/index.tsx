import React, {FC} from 'react';
import {UserType} from "../../types/UserType";
import logo from "./../../img/logo.png"

import {
  UserName,
  UserAvatar,
  Container,
} from "./styled";

interface OwnProps{
  data: UserType;
}

const UserInfo: FC<OwnProps> = ({data}) => {
  const {firstName} = data;
  return (
    <Container>
      <UserAvatar src={logo} />
      <UserName>{firstName}</UserName>
    </Container>
  );
};

export default UserInfo;