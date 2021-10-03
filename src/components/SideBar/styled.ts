import styled from "styled-components";

interface Props {
  active?: boolean;
}

export const List = styled.ul`
  background: #252d3d;
  width: 250px;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px 0;

  img {
    display: block;
    max-height: 90px;
    margin: 0 auto;
  }
`;

export const Item = styled.li<Props>`
  display: block;
  ${({ active }) => active && "background: #558bf5"};
  margin: 0 15px 6px;
  border-radius: 7px;

  svg {
    width: 24px;
    margin: 0 20px 0 0;
  }

  a {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 10px;
    color: #fff;
    text-decoration: none;
  }
`;
