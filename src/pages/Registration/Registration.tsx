import {Button, Card, Col, Form, Image, Input, Row, Space, Typography} from 'antd';
import Auth from "../../store/auth";
import css from "./Registration.module.scss"
import logo from "./../../img/logo.png"
import {AUTH} from "../../constants/routes";

const Registration = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={css.wrapper}>
      <Card className={css.card}>
        <Row
          align="middle"
          justify="center"
          gutter={[25, 25]}
        >
          <Col>
            <Image src={logo} preview={false} height={50} width={50}/>
          </Col>
        </Row>
        <Row
          align="middle"
          justify="center"
          gutter={[25, 25]}
        >
          <Col>
            <Typography.Title>Регистрация</Typography.Title>
          </Col>
        </Row>
        <br/>
        <Form
          name="Authorization"
          initialValues={{email: "demo@demo.com", password: "demo"}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" onClick={() => Auth.setIsUserAuth(true)}>
                Зарегистрироваться
              </Button>
              <Typography.Link href={AUTH}>Авторизоваться</Typography.Link>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Registration;