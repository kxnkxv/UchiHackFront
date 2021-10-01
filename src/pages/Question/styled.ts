import styled from "styled-components";
import {Button, } from "antd";
import TextArea from "antd/es/input/TextArea";

interface Props{
  toRight?: boolean;
}

export const Container = styled.div`
  max-width: 1260px;
  padding: 0 40px;
  margin: 60px auto;
`;

export const QuestionWrap = styled.div`
`;

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

export const PublicChat = styled(Button)<Props>`
  background: #F5F8FB;
  margin: ${({toRight}) => toRight ? '0 0 0 auto' : '0'};
  border: none;
  border-radius: 8px;
  font-weight: 500;
  padding: 6px 18px;
  height: 44px;
`;

export const AddAnswer = styled.div`
  margin: 30px 0;
`;

export const Submit = styled(Button)`
  background: #558BF5;
  border-radius: 6px;
  width: 220px;
  height: 50px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0 0 0;
  border: none;
`;

export const Status = styled.span<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #8C98AE;
  background: #F5F8FB;
  border-radius: 6px;
  margin: ${({toRight}) => toRight ? '0 0 0 auto' : '0'};
  padding: 6px 18px;
`;

export const StyledTextArea = styled(TextArea)`
  &&&{
    border: 2px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 13px;
    height: 140px;
    padding: 20px 20px 20px 25px;

    ::placeholder{
      color: #8C98AE;
      font-weight: 500;
    }
  }
`;

export const Coast = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F2F7FF;
  color: #558BF5;
  font-weight: 500;
  border-radius: 8px;
  padding: 10px 20px;
`;
