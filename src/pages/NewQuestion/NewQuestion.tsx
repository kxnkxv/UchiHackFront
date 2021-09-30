import {Button, Form, Input, Typography} from 'antd';

const NewQuestion = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Typography.Title>Создать вопрос</Typography.Title>
      <Form.Item>
        <Input.TextArea/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Создать вопрос
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewQuestion;