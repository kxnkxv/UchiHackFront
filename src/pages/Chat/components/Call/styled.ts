import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

export const CallWindow = styled.div`
  width: 70vw;
  height: 90vh;
  background: #333;
  border-radius: 6px;
`;

export const LocalVideo = styled.video`
  width: 300px;
  height: 300px;
  margin: 20px;
  background: lightgreen;
`;

export const RemoteVideo = styled.video`
  width: 300px;
  height: 300px;
  margin: 20px;
  background: lightblue;
`;

export const StartCall = styled(Button)`
  width: 200px;
  height: 50px;
`;
