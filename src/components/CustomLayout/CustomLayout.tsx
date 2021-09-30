import {FC} from 'react';
import {Col, Layout, Row} from 'antd';
import HeaderNav from '../HeaderNav/HeaderNav';
import SideBar from '../SideBar/SideBar';

const {Footer, Content} = Layout;


const CustomLayout: FC = ({children}) => {
  return (
    <>
      <Row
        gutter={[25, 25]}
        justify="space-around"
        align="middle"
        style={{
          padding: 0,
          margin: 0
        }}
      >
        <Col span={24}>
          <HeaderNav/>
        </Col>
      </Row>
      <Row
        gutter={[25, 25]}
        justify="center"
        align="middle"
        style={{
          padding: 0,
          margin: 0
        }}
      >
        <Col span={3}>
          <SideBar/>
        </Col>
        <Col span={21}>
          <Content>{children}</Content>
        </Col>
      </Row>
      <Row
        justify="space-around"
        align="middle"
        style={{
          padding: 0,
          margin: 0
        }}
      >
        <Col span={24}>
          <Footer>
            made with love by hahathon in 2021
          </Footer>
        </Col>
      </Row>
    </>
  );
};

export default CustomLayout;