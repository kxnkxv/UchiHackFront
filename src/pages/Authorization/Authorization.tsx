import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Image,
  Input,
  Row,
  Typography,
} from "antd";
import css from "./Authorization.module.scss";
import logo from "./../../img/logo.png";
import { REGISTRATION, RESTORE_PASSWORD } from "../../constants/routes";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Auth from "../../store/auth";

const Authorization = () => {
  const onFinish = (values: any) => {
    Auth.authLogin(values.email, values.password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={css.wrapper}>
      <Card className={css.card}>
        <Row align="middle" justify="center" gutter={[25, 25]}>
          <Col>
            <Link to="/">
              <Image src={logo} preview={false} height={50} width={50} />
            </Link>
          </Col>
        </Row>
        <Row align="middle" justify="center" gutter={[25, 25]}>
          <Col>
            <Typography.Title>Авторизация</Typography.Title>
          </Col>
        </Row>
        <br />
        <Form name="login" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите свой email!",
              },
              {
                type: "email",
                message: "Введите email правильно!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Электронная почта" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Пожалуйста введите пароль!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            <Row align="middle" justify="space-between" gutter={[25, 25]}>
              <Col>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>
              </Col>
              <Col>
                <a href={RESTORE_PASSWORD}>Кажется, я забыл пароль</a>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row align="middle" justify="space-between" gutter={[25, 25]}>
              <Col>
                <Button type="primary" htmlType="submit">
                  Войти
                </Button>
              </Col>
              <Col>
                или <a href={REGISTRATION}>Зарегистрироваться сейчас</a>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Authorization;
