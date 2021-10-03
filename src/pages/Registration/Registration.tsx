import { Button, Card, Col, Form, Image, Input, Row, Typography } from "antd";
import css from "./Registration.module.scss";
import logo from "./../../img/logo.png";
import { AUTH } from "../../constants/routes";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Auth from "../../store/auth";
import { useState } from "react";

const Authorization = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setLoading(true);
    Auth.authRegister(
      values.email,
      values.password,
      values.firstName,
      values.lastName
    )
      .then(() => {
        window.location.replace(AUTH);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={css.wrapper}>
      <Card className={css.card} loading={loading}>
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
        >
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите своё имя!",
              },
            ]}
          >
            <Input placeholder="Ваше имя" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите свою фамилию!",
              },
            ]}
          >
            <Input placeholder="Ваша фамилия" />
          </Form.Item>
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
          <Row align="middle" justify="space-between" gutter={[25, 25]}>
            <Col span={12}>
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
                <Input.Password placeholder="Придумайте пароль" />
              </Form.Item>
            </Col>
            <Col span={12}>
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
                <Input.Password placeholder="Подтвердите пароль" />
              </Form.Item>
            </Col>
          </Row>
          {error ? (
            <Typography.Text type="danger">{error}</Typography.Text>
          ) : null}
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
