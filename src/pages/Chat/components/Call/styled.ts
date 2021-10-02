import styled from "styled-components";
import { Button } from "antd";

interface Props {
  usersCount?: number;
}

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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 70vw;
  height: 90vh;
  background: #333;
  border-radius: 6px;
`;

export const VideoContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ usersCount = 1 }) => `calc(${100 / usersCount}% - 40px)`};
  box-sizing: border-box;
  min-width: 300px;
`;

export const LocalVideo = styled.video`
  display: block;
  width: calc(100% - 40px);
  max-height: 100%;
  padding: 20px;
  background: #424242;
`;

export const RemoteVideo = styled.video`
  display: block;
  width: calc(100% - 40px);
  max-height: 100%;
  padding: 20px;
  background: #424242;
`;

export const StartCall = styled(Button)`
  height: auto;
  padding: 10px 20px;
  margin: 0 20px;
`;

export const Controls = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;

export const Close = styled(Button)`
  position: absolute;
  top: 40px;
  right: 40px;
`;

export const Device = styled.button``;
