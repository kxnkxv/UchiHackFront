import styled from "styled-components";
import {Link} from "react-router-dom";

interface Props {
  bold?: boolean;
  urgently?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 20px 30px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 0 auto 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span<Props>`
  font-size: 16px;
  ${({bold}) => bold && 'font-weight: bold;'};
  color: ${({urgently}) => urgently ? 'red' : '#000'};
  margin: 0 15px 0 0;
`;

export const Description = styled.p<Props>`
  display: flex;
  padding: 0;
  width: 100%;
  margin: 30px 0 0 0;
`;

export const DescriptionLink = styled(Link)`
  display: block;
  margin: 30px 0 0 0;

  ${Description} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin: 0;
  }
`;

export const Footer = styled.div`
  display: flex;
  margin: 30px 0 0 0;
`;
