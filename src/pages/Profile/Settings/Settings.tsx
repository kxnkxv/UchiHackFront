import React, { FC } from "react";
import { Button, Col, Form, Input, message, Row, Select, Switch } from "antd";
import User from "../../../store/user/user";
import AvatarUpload from "../../../components/AvatarUpload/AvatarUpload";
import { MailOutlined } from "@ant-design/icons";
import Auth from "../../../store/auth";

const Settings: FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    message.success("Данные сохранены");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="horizontal"
      initialValues={{
        email: User.user.email,
        lastName: User.user.lastName,
        firstName: User.user.firstName,
        patronymic: User.user.patronymic,
        education: User.user.education,
        emailNotify: User.user.emailNotify,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="Изображение профиля">
        <AvatarUpload />
      </Form.Item>
      <Form.Item
        label="Фамилия Имя Отчество"
        style={{
          marginBottom: 0,
        }}
      >
        <Row align="middle" justify="space-between" gutter={[25, 25]}>
          <Col span={8}>
            <Form.Item name="lastName">
              <Input placeholder="Фамилия" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="firstName">
              <Input placeholder="Имя" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="patronymic">
              <Input placeholder="Отчество" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item
        label="Электронная почта"
        name="email"
        rules={[
          {
            type: "email",
            message: "Введите email правильно!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Электронная почта" />
      </Form.Item>
      <Form.Item
        label="Смена пароля"
        style={{
          marginBottom: 0,
        }}
      >
        <Row align="middle" justify="space-between" gutter={[25, 25]}>
          <Col span={8}>
            <Form.Item name="oldPassword" hasFeedback>
              <Input.Password placeholder="Введите старый пароль" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="newPassword" hasFeedback>
              <Input.Password placeholder="Введите новый пароль" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="newPasswordConfirm"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Пароли не совпадают!"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Подтвердите новый пароль" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item label="Уровень образования" name="education">
        <Select>
          <Select.Option value="1">Первый класс</Select.Option>
          <Select.Option value="2">Второй класс</Select.Option>
          <Select.Option value="3">Третий класс</Select.Option>
          <Select.Option value="4">Четвёртый класс</Select.Option>
          <Select.Option value="5">Пятый класс</Select.Option>
          <Select.Option value="6">Шестой класс</Select.Option>
          <Select.Option value="7">Седьмой класс</Select.Option>
          <Select.Option value="8">Восьмой класс</Select.Option>
          <Select.Option value="9">Девятый класс</Select.Option>
          <Select.Option value="10">Десятый класс</Select.Option>
          <Select.Option value="11">Одиннадцатый класс</Select.Option>
          <Select.Option value="spo">Я учусь в колледже</Select.Option>
          <Select.Option value="uni">Я учусь в ВУЗе</Select.Option>
          <Select.Option value="ids">Я не учусь</Select.Option>
          <Select.Option value="idwt">Не хочу говорить</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Я хочу получать уведомления на почту"
        valuePropName="checked"
        name="emailNotify"
      >
        <Switch />
      </Form.Item>
      <Row align="middle" justify="space-between" gutter={[25, 25]}>
        <Col>
          <Form.Item>
            <Button danger>Отменить изменения</Button>
            <Button danger onClick={() => Auth.setIsUserAuth(false)}>
              Выйти из аккаунта
            </Button>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default Settings;
