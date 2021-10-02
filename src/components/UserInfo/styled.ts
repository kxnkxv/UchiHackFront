import styled from "styled-components";
import { Avatar } from "antd";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px 0 0;
`;

export const UserAvatar = styled(Avatar)`
  margin: 0 20px 0 0;
  width: 30px;
  height: 30px;
`;

export const UserName = styled.span`
  font-weight: 500;
`;
