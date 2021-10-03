import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";

interface Props {
  bold?: boolean;
  urgently?: boolean;
  small?: boolean;
}

export const Container = styled(Card)`
  background: #f2f7ff;
  margin: 30px 0 0 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span<Props>`
  font-size: ${({ small }) => (small ? "14px" : "16px")};
  ${({ bold }) => bold && "font-weight: bold;"};
  color: ${({ urgently }) => (urgently ? "red" : "#000")};
  margin: 0 15px 0 0;
`;

export const Description = styled(Link)`
  display: block;
  padding: 0;
  width: 100%;
  margin: 30px 0 0 0;
  font-size: 20px;
  font-weight: 500;
  color: #111;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 0 0;
`;

export const ToAnswer = styled(Button)`
  margin: 0 0 0 20px;
  padding: 10px 30px;
  height: auto;
  background: #558bf5;
`;

export const AnswersCount = styled.span`
  display: block;
  margin: 0 0 0 auto;
`;

export const Coast = styled.span`
  display: block;
  font-weight: 500;
  background: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  color: #558bf5;
  margin: 0 20px 0 0;
`;
