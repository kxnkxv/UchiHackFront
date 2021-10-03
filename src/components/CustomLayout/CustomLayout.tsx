import { FC } from "react";
import { Col, Layout, Row } from "antd";
import HeaderNav from "../HeaderNav/HeaderNav";
import SideBar from "../SideBar/SideBar";

import { StyledRow, Content } from "./styled";

const { Footer } = Layout;

const CustomLayout: FC = ({ children }) => {
  return (
    <>
      <StyledRow>
        <SideBar />
        <Content>
          <HeaderNav />
          <Content>{children}</Content>
        </Content>
      </StyledRow>
      <Footer>made with love by hahathon in 2021</Footer>
    </>
  );
};

export default CustomLayout;
