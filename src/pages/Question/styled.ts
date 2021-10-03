import styled from "styled-components";
import { Button, Card, Tag } from "antd";

export const Container = styled.div`
  margin: 60px 0 0 0;
`;

export const Grid = styled.div`
  max-width: 1260px;
  padding: 0 40px;
  margin: 0 auto;
`;

export const QuestionWrap = styled(Card)`
  border-radius: 7px;
`;

export const AnswersWrap = styled.div`
  background: #f2f7ff;
  padding: 40px 0 60px;
`;

export const Description = styled.p`
  margin: 24px 0;
  padding: 0;
`;

export const Status = styled(Tag)`
  margin: 0;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  ${Status} {
    margin: 0 0 0 auto;
  }
`;

export const PublicChat = styled(Button)`
  margin: 0;
  height: 44px;
`;

export const Header = styled.div`
  display: flex;
  margin: 0 0 24px 0;

  ${PublicChat} {
    margin: 0 0 0 auto;
  }
`;

export const QuestionTitle = styled.span`
  display: block;
  font-size: 34px;
  line-height: 100%;
`;

export const Title = styled.div`
  margin: 0 30px 0 0;
`;

export const AddAnswer = styled.div`
  margin: 30px 0;
`;

export const Submit = styled(Button)`
  margin: 20px 0 0;
`;

export const Cost = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #558bf5;
  font-weight: 500;
  padding: 10px 20px;
`;
