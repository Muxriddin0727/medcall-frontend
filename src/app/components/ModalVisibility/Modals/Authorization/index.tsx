import React from 'react';
import{FC} from  "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useReduxDispatch, useReduxSelector } from '../../../../hooks';
import { setAuthModal } from '../../../../redux/modalSlice';

const AuthenticationModal: FC = () => {
  const{authModal} = useReduxSelector(state=>state.modal);
  const dispatch = useReduxDispatch();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Modal onCancel={() => {
      dispatch(setAuthModal());
    }}
    open= {authModal}>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </Modal>
  );
};

export default AuthenticationModal;