import styled from "styled-components";
import { Input } from "antd";

export const Search = styled(Input.Search)`
  input {
    background: #f2f7ff;
    border: none;
    height: 50px;
  }

  button {
    background: #f2f7ff;
    border: none;
    outline: none;
    box-shadow: none;
    height: 50px;

    svg {
      fill: #000;
    }
  }
`;
