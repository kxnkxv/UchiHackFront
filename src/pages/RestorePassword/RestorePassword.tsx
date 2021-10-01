import {Button, Card, Col, Form, Image, Input, Result, Row, Typography} from 'antd';
import css from "./RestorePassword.module.scss"
import logo from "./../../img/logo.png"
import {AUTH} from '../../constants/routes';
import {MailOutlined, SmileOutlined} from '@ant-design/icons';
import {useState} from "react";
import {Link} from 'react-router-dom';

const RestorePassword = () => {
  const [isEmailSent, setIsEmailSent] = useState(false)
  const onFinish = (values: any) => {
    console.log('Success:', values);
    setIsEmailSent(true)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={css.wrapper}>
      <Card className={css.card}>
        {
          isEmailSent
            ? <Result
              icon={<SmileOutlined/>}
              title="Письмо для восстановлении пароля было отправлено"
              extra={<Link to="/"><Button type="primary">Вернуться на главную</Button></Link>}
            />
            : <>
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
                  <Typography.Title>Восстановление пароля</Typography.Title>
                </Col>
              </Row>
              <br/>
              <Form
                name="login"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{
                  email: "demo@demo.com"
                }}
              >
                <Form.Item
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
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Отправить ссылку для восстановление пароля
                  </Button>
                </Form.Item>
                <a href={AUTH}>Кажется, я вспомнил пароль</a>
              </Form>
            </>
        }
      </Card>
    </div>
  );
};

export default RestorePassword;