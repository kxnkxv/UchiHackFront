import React from 'react';
import Auth from "../../store/auth";
import {Button, Cascader, DatePicker, Form, Input, InputNumber, Select, Switch, TreeSelect} from "antd";
import AvatarUpload from '../../components/AvatarUpload/AvatarUpload';

const UserProfile = () => {
  return (
    <div>
      <AvatarUpload/>
      <Form
        layout="horizontal"
      >
        <Form.Item label="Input">
          <Input/>
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {title: 'Light', value: 'light', children: [{title: 'Bamboo', value: 'bamboo'}]},
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker/>
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber/>
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch/>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
      <Button danger onClick={() => Auth.setIsUserAuth(false)}>Выйти</Button>
    </div>
  );
};

export default UserProfile;