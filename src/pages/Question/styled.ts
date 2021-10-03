import styled from "styled-components";
import { Button, Card, Tag } from "antd";

export const Container = styled.div`
  max-width: 1260px;
  padding: 0 40px;
  margin: 60px auto;
`;

export const QuestionWrap = styled(Card)``;

export const Description = styled.p`
  margin: 24px 0;
  padding: 0;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  margin: 0 0 24px 0;
`;

export const QuestionTitle = styled.span`
  display: block;
  font-size: 34px;
  line-height: 100%;
`;

export const Title = styled.div`
  margin: 0 30px 0 0;
`;

export const PublicChat = styled(Button)`
  margin: 0;
  height: 44px;
`;

export const AddAnswer = styled.div`
  margin: 30px 0;
`;

export const Submit = styled(Button)`
  margin: 20px 0 0;
`;

export const Status = styled(Tag)`
  margin: 0;
`;

export const Cost = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #558bf5;
  font-weight: 500;
  padding: 10px 20px;
`;
