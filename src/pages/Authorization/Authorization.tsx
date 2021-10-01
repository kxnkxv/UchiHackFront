import {Button, Card, Checkbox, Col, Form, Image, Input, Row, Space, Typography} from 'antd';
import Auth from "../../store/auth";
import css from "./Authorization.module.scss"
import logo from "./../../img/logo.png"
import {REGISTRATION} from '../../constants/routes';

const Authorization = () => {
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
            <Typography.Title>Авторизация</Typography.Title>
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
              <Checkbox>Remember me</Checkbox>
              <Button type="primary" htmlType="submit" onClick={() => Auth.setIsUserAuth(true)}>
                Войти
              </Button>
              <Typography.Link href={REGISTRATION}>Зарегистрироваться</Typography.Link>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Authorization;