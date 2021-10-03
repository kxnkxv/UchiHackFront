import styled from "styled-components";
import { Input } from "antd";

export const Search = styled(Input.Search)`
  input {
    background: #f5f8fb;
    border: none;
    height: 50px;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    height: 50px;

    svg {
      fill: #000;
    }
  }
`;
