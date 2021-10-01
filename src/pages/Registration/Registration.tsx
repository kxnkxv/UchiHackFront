import { Button, Card, Col, Form, Image, Input, Row, Typography } from "antd";
import Auth from "../../store/auth";
import css from "./Registration.module.scss";
import logo from "./../../img/logo.png";
import { AUTH } from "../../constants/routes";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Authorization = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    Auth.setIsUserAuth(true);
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
            <Typography.Title>Регистрация</Typography.Title>
          </Col>
        </Row>
        <br />
        <Form
          name="registration"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
          initialValues={{
            email: "demo@demo.com",
            password: "demo",
            confirm: "demo",
          }}
        >
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
            rules={[
              {
                required: true,
                message: "Пожалуйста введите пароль!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Пожалуйста подтвердите пароль!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Пароли не совпадают!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Row align="middle" justify="space-between" gutter={[25, 25]}>
              <Col>
                <Button type="primary" htmlType="submit">
                  Зарегистрироваться
                </Button>
              </Col>
              <Col>
                У меня уже есть аккаунт! <a href={AUTH}>Авторизоваться</a>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Authorization;
