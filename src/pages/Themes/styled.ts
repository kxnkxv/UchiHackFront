import styled from "styled-components";
import { Card } from "antd";

export const Container = styled.div`
  max-width: 1260px;
  padding: 0 40px;
  margin: 60px auto;
`;

export const Heading = styled.div`
  display: block;
  font-size: 24px;
  font-weight: 500;
`;

export const Theme = styled(Card)`
  width: 200px;
  height: 200px;
`;
