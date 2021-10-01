import styled from "styled-components";
import TextArea from "antd/es/input/TextArea";

export const Container = styled.div`
  margin: 0 0 60px 0;
`;

export const MessageWrap = styled.div`
  margin: 20px 0 0 50px;
`;

export const Message = styled.div`
  font-weight: 500;
  margin: 0 0 20px 0;
`;

export const AddComment = styled(TextArea)`
  &&& {
    border: 2px solid #eaeaea;
    box-sizing: border-box;
    border-radius: 13px;
    height: 65px;
    margin: 20px 0 0 0;

    ::placeholder {
      color: #8c98ae;
      font-weight: 500;
    }
  }
`;

export const OpenComment = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  height: 50px;
  min-width: 50px;
  color: #8c98ae;
  padding: 0 20px;
  background: #f5f8fb;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Like = styled(OpenComment)`
  font-weight: 500;
  margin: 0 0 20px 0;
`;
