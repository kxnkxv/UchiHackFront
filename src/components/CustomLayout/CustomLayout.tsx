import {FC} from 'react';
import {Col, Layout, Menu} from 'antd';
import RowWrap from '../RowWrap/RowWrap';
import HeaderNav from '../HeaderNav/HeaderNav';

const {SubMenu} = Menu;
const {Header, Footer, Sider, Content} = Layout;


const CustomLayout: FC = ({children}) => {
  return (
    <>
      <RowWrap>
        <Col span={24}>
          <HeaderNav/>
        </Col>
      </RowWrap>
      <RowWrap>
        <Col span={24}>
          <Content>{children}</Content>
        </Col>
      </RowWrap>
      <RowWrap>
        <Col span={24}>
          <Footer>
            made with love by hahathon in 2021
          </Footer>
        </Col>
      </RowWrap>
    </>
  );
};

export default CustomLayout;