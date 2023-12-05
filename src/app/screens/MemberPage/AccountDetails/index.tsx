import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FC, useEffect } from "react";


const verifiedMember = JSON.parse(
  String(localStorage.getItem("member_data"))
) as any;

const AccountDetails: FC = () => {


  return (
    <Form
      name="complex-form"
      labelCol={{
        span: 12,
      }}
      wrapperCol={{
        span: 26,
      }}
      layout="vertical"
      className="w-full"
      size="large"
      initialValues={{
        name: verifiedMember.mb_name,
        surname: verifiedMember.mb_last_name,
        email:verifiedMember.mb_email,
        phone_number: verifiedMember.mb_phone,
        username: verifiedMember.mb_username,
      }}
    >
      <Form.Item
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          marginBottom: 0,
        }}
      >
        <Form.Item
          label="First name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
          }}
        >
          <Input placeholder="Type your first name..." />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="surname"
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input placeholder="Type your last name..." />
        </Form.Item>
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          marginBottom: 0,
        }}
      >
        <Form.Item
          label="Email address"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
          }}
        >
          <Input placeholder="Your email address..." />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[
            {
              required: false,
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input addonBefore={"+8210"} placeholder="Your phone number..." />
        </Form.Item>
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          marginBottom: 0,
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
          }}
        >
          <Input placeholder="Your username..." />
        </Form.Item>
        <Form.Item
          label="Profile photo"
          name="profile_photo"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Upload
            name="image"
            action={
              "https://greenshop.abduvoitov.com/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
            }
                    >
                        <Button type="primary" className="bg-cyan-500" icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>
            </Form.Item>
            <Button htmlType="submit" className="h-[40px] px-[10px] mt-[15px] bg-cyan-500" type="primary">
                Save changes
      </Button>
    </Form>
  );
};

export default AccountDetails;