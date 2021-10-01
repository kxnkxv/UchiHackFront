import React from 'react';
import Auth from "../../store/auth";
import {Button, Col, Form, Input, message, Row, Select, Switch} from "antd";
import AvatarUpload from '../../components/AvatarUpload/AvatarUpload';
import {MailOutlined} from "@ant-design/icons";
import User from "./../../store/user/user"

const UserProfile = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
    message.success("Данные сохранены")
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <AvatarUpload/>
      <Form
        layout="horizontal"
        initialValues={{
          email: User.user.email
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Электронная почта"
          name="email"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите свой email!'
            },
            {
              type: 'email',
              message: 'Введите email правильно!',
            },
          ]}
        >
          <Input prefix={<MailOutlined/>} placeholder="Электронная почта"/>
        </Form.Item>
        <Form.Item label="Класс" name="class">
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
        <Form.Item label="Я хочу получать уведомления на почту" valuePropName="checked" name="emailNotify">
          <Switch/>
        </Form.Item>
        <Row
          align="middle"
          justify="space-between"
          gutter={[25, 25]}
        >
          <Col>
            <Form.Item>
              <Button danger>Отменить изменения</Button>
              <Button danger onClick={() => Auth.setIsUserAuth(false)}>Выйти из аккаунта</Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">Сохранить</Button>
            </Form.Item>
          </Col>

        </Row>
      </Form>

    </div>
  );
};

export default UserProfile;