import {
  AutoComplete,
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import React, { useState } from "react";
import ThemeItem from "../Themes/components/ThemeItem/ThemeItem";
import { List } from "../Themes/styled";
import { Container } from "./styled";
import axios from "axios";
import { QuestionType } from "../../types/QuestionType";
import { URL } from "../../constants/API";
import Auth from "../../store/auth";

const NewQuestion = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFinish = (values: any) => {
    setLoading(true);
    axios
      .request<QuestionType>({
        method: "post",
        url: `${URL}/questions/create`,
        headers: {
          Authorization: `Bearer ${Auth.token.accessToken}`,
        },
        data: values,
      })
      .then((response) => {
        console.log(response);
        message.success("Вопрос создан");
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
        message.error("Ошибка при создании вопроса");
      })
      .finally(() => setLoading(false));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const themes = [
    { value: "Математика" },
    { value: "Русский" },
    { value: "Исскуство" },
  ];

  const subThemes = [
    { value: "Вторая мировая война" },
    { value: "Логарифмы" },
    { value: "Грамматика" },
  ];

  const [similar, setSimilar] = useState([]);

  const getSimilar = () => {
    const theme = form.getFieldValue("theme");
    const subTheme = form.getFieldValue("subTheme");
    const title = form.getFieldValue("title");
    const description = form.getFieldValue("description");
    //TODO: Поиск похожих вопросов
    setSimilar([]);
    console.log(theme, subTheme, title, description);
  };

  let time = [];
  let i = 0;
  while (i <= 60) {
    time.push(i);
    i = i + 5;
  }
  let cost = [];
  let y = 0;
  while (y <= 100) {
    cost.push(y);
    y++;
  }

  return (
    <Container>
      <Card loading={loading}>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
          initialValues={{
            urgently: false,
          }}
        >
          <Space>
            <Typography.Title>Задать вопрос</Typography.Title>
            {error ? (
              <Typography.Text type="danger">{error}</Typography.Text>
            ) : null}
          </Space>
          <Row align="middle" justify="space-between" gutter={[25, 25]}>
            <Col span={12}>
              <Form.Item
                name="theme"
                rules={[
                  {
                    required: true,
                    message: "Это поле обязательно для заполнения!",
                  },
                ]}
              >
                <AutoComplete
                  options={themes}
                  filterOption={(inputValue, option) =>
                    option!.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                  placeholder="Введите название предмета или выберите из выпадающего списка"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="subTheme"
                rules={[
                  {
                    required: true,
                    message: "Это поле обязательно для заполнения!",
                  },
                ]}
              >
                <AutoComplete
                  options={subThemes}
                  filterOption={(inputValue, option) =>
                    option!.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                  placeholder="Введите название темы или выберите из выпадающего списка"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: "Это поле обязательно для заполнения!",
              },
            ]}
          >
            <Input
              placeholder="Кратко опишите Ваш вопрос"
              onChange={getSimilar}
            />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: "Это поле обязательно для заполнения!",
              },
            ]}
          >
            <Input.TextArea
              placeholder="Подробно опишите Ваш вопрос"
              autoSize={{ minRows: 3, maxRows: 5 }}
              onChange={getSimilar}
            />
          </Form.Item>
          <Row align="middle" justify="space-between" gutter={[25, 25]}>
            <Col span={8}>
              <Form.Item
                label="Стоимость"
                name="cost"
                rules={[
                  {
                    required: true,
                    message: "Это поле обязательно для заполнения!",
                  },
                ]}
              >
                <Select>
                  {cost.map((cos) => {
                    return (
                      <Select.Option value={cos}>{cos} баллов</Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="urgently" valuePropName="checked">
                <Checkbox>Нужно срочное решение!</Checkbox>
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                name="time"
                rules={[
                  {
                    required: true,
                    message: "Это поле обязательно для заполнения!",
                  },
                ]}
              >
                <Select>
                  {time.map((min) => {
                    return (
                      <Select.Option value={min}>{min} минут</Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Создать вопрос
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      {similar.length !== 0 ? (
        <Card>
          <Typography.Title>Похожие вопросы</Typography.Title>
          <List>
            {similar.map((question) => (
              <ThemeItem question={question} />
            ))}
          </List>
        </Card>
      ) : null}
    </Container>
  );
};

export default NewQuestion;
