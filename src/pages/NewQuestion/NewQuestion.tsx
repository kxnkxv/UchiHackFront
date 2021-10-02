import {
  AutoComplete,
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import React, { useState } from "react";
import ThemeItem from "../Themes/components/ThemeItem/ThemeItem";
import { List } from "../Themes/styled";
import moment from "moment";
import { users } from "../../mockData/users";
import { UserType } from "../../types/UserType";

const NewQuestion = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
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
    const subtheme = form.getFieldValue("subtheme");
    const title = form.getFieldValue("title");
    const description = form.getFieldValue("description");
    const result = [
      {
        id: "111",
        title: "Вопрос 1",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip",
        theme: "russian",
        subTheme: "",
        createdAt: moment(),
        user: users.find(({ id }) => id === "111") as UserType,
        cost: 0,
        status: "Не решено",
        time: 0,
        urgently: false,
      },
    ];
    // @ts-ignore
    setSimilar(result);
    console.log(theme, subtheme, title, description);
  };

  return (
    <Row align="middle" justify="space-around">
      <Space size={[25, 25]} direction="vertical">
        <Card>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <Typography.Title>Задать вопрос</Typography.Title>
            <Row align="middle" justify="space-between" gutter={[25, 25]}>
              <Col span={12}>
                <Form.Item name="theme">
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
                <Form.Item name="subtheme">
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
            <Form.Item name="title">
              <Input
                placeholder="Кратко опишите Ваш вопрос"
                onChange={getSimilar}
              />
            </Form.Item>
            <Form.Item name="description">
              <Input.TextArea
                placeholder="Подробно опишите Ваш вопрос"
                autoSize={{ minRows: 3, maxRows: 5 }}
                onChange={getSimilar}
              />
            </Form.Item>
            <Row align="middle" justify="space-between" gutter={[25, 25]}>
              <Col span={6}>
                <Form.Item label="Баллы" name="cost">
                  <Select>
                    <Select.Option value="Первый класс">
                      Первый класс
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="urgently">
                  <Checkbox>Нужно срочное решение!</Checkbox>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="time">
                  <Select>
                    <Select.Option value="Первый класс">
                      Первый класс
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
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
      </Space>
    </Row>
  );
};

export default NewQuestion;
