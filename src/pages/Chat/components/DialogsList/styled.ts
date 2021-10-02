import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0 0 0;
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #eee;
  padding: 0 25px;
  
  &:hover{
    background: #eee;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Message = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #8C98AE;
  text-align: left;
  overflow: hidden;
`;

export const Time = styled.span`
  color: #8C98AE;
`;

export const Name = styled.span`
  color: #000;
`;
