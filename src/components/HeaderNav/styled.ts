import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 30px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
  }
`;

export const SearchWrap = styled.div`
  max-width: 30%;
  width: 100%;
`;

export const ChatButton = styled(Button)`
  width: 44px;
  height: 44px;
  background: #f2f7ff;
  border: none;
  box-shadow: none;
  border-radius: 7px;
  padding: 6px 0 0 0;
  margin: 0 20px 0 0;

  svg {
    width: 24px;
  }
`;
