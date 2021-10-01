import React, { FC } from "react";
import { Button, Checkbox, Col, Form, Input, message, Row, Select } from "antd";
import User from "../../../store/user/user";
import AvatarUpload from "../../../components/AvatarUpload/AvatarUpload";
import { MailOutlined } from "@ant-design/icons";

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
          <Select.Option value="Первый класс">Первый класс</Select.Option>
          <Select.Option value="Второй класс">Второй класс</Select.Option>
          <Select.Option value="Третий класс">Третий класс</Select.Option>
          <Select.Option value="Четвёртый класс">Четвёртый класс</Select.Option>
          <Select.Option value="Пятый класс">Пятый класс</Select.Option>
          <Select.Option value="Шестой класс">Шестой класс</Select.Option>
          <Select.Option value="Седьмой класс">Седьмой класс</Select.Option>
          <Select.Option value="Восьмой класс">Восьмой класс</Select.Option>
          <Select.Option value="Девятый класс">Девятый класс</Select.Option>
          <Select.Option value="Десятый класс">Десятый класс</Select.Option>
          <Select.Option value="Одиннадцатый класс">
            Одиннадцатый класс
          </Select.Option>
          <Select.Option value="Я учусь в колледже">
            Я учусь в колледже
          </Select.Option>
          <Select.Option value="Я учусь в ВУЗе">Я учусь в ВУЗе</Select.Option>
          <Select.Option value="Я не учусь">Я не учусь</Select.Option>
          <Select.Option value="Не хочу говорить">
            Не хочу говорить
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Я хочу получать уведомления на почту"
        valuePropName="checked"
        name="emailNotify"
      >
        <Checkbox />
      </Form.Item>
      <Row align="middle" justify="space-between" gutter={[25, 25]}>
        <Col>
          <Form.Item>
            <Button danger>Отменить изменения</Button>
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
