import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 999;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`;

export const ChatWrap = styled.div`
  position: relative;
  width: 500px;
  height: 100%;
  background: #fff;
`;

export const Heading = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
`;

export const Close = styled.button`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
`;
