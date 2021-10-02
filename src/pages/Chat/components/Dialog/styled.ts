import styled from "styled-components";

interface Props {
  myMessage?: boolean;
}

export const Container = styled.div``;

export const Header = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  background: #fff;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  background: #f2f7ff;
  padding: 0 25px 60px 25px;
  overflow: auto;
`;

export const Message = styled.div<Props>`
  padding: 20px 10px;
  background: ${({ myMessage }) => (myMessage ? "#afc7ef" : "#e0ecff")};
  border-radius: 6px;
  width: 70%;
  margin: ${({ myMessage }) => (myMessage ? "0 0 14px auto" : "0 0 14px 0")};
`;

export const MessageForm = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 60px;
  padding: 10px;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  textarea {
    height: 40px;
    margin: 0 10px 0 0;
    border-radius: 6px;
  }

  button {
    height: 40px;
  }
`;
