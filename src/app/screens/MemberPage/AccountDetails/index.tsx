import { Button, Form, Input, Skeleton, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FC, useEffect, useState, Dispatch, SetStateAction } from "react";
import { verifiedMemberData } from "../../../api/verify";
import { useAxios } from "../../../customHooks/useAxios";
import {
  sweetErrorHandling,
  sweetTopSuccessAlert,
} from "../../../../lib/sweetAlert";
import { File } from "../../../../types/others";

import { UploadFile } from "antd/lib/upload/interface";
import { useMemberData } from "../../../context/MemberDataContext";
import { VerifiedMemberData } from "../../../../types/user";

const AccountDetails: FC = () => {
  const axios = useAxios();
  const [form] = Form.useForm();
  const { verifiedMemberData, setVerifiedMemberData } = useMemberData() as {
    verifiedMemberData: VerifiedMemberData | null | undefined;
    setVerifiedMemberData: Dispatch<
      SetStateAction<VerifiedMemberData | null | undefined>
    >;
  };
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState(true);

  const handleUploadChange = (info: { fileList: UploadFile<any>[] }) =>
    setFileList(info.fileList);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await axios({
          url: "/client/member-data",
          method: "GET",
        });

        if (response.data && setVerifiedMemberData) {
          setVerifiedMemberData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch member data:", error);
      }
    };

    fetchMemberData();
  }, []);

  useEffect(() => {
    console.log("verifiedMemberData", verifiedMemberData);
    if (
      verifiedMemberData &&
      verifiedMemberData.state === "success" &&
      verifiedMemberData.data
    ) {
      form.setFieldsValue({
        name: verifiedMemberData.data.mb_name,
        surname: verifiedMemberData.data.mb_last_name,
        email: verifiedMemberData.data.mb_email,
        phone_number: verifiedMemberData.data.mb_phone,
        username: verifiedMemberData.data.mb_username,
      });
      setLoading(false);
    }
  }, [verifiedMemberData]);

  const onFinish = async (values: any) => {
    try {
      const updatedData = {
        ...values,
        profile_photo: fileList.length > 0 ? fileList[0].name : undefined,
      };
      const response = await axios({
        url: "/client/member-update",
        method: "POST",
        body: updatedData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setVerifiedMemberData({
        ...response.data.updatedMemberData,
        updated_at: Date.now(),
      });

      localStorage.setItem(
        "verifiedMemberData",
        JSON.stringify(response.data.updatedMemberData)
      );

      sweetTopSuccessAlert("Member data updated successfully!");
    } catch (error) {
      console.error("An error occurred while updating member data:", error);
      sweetErrorHandling("Failed to update member data. Please try again.");
    }
  };
  return (
    <Form
      form={form}
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
        name: verifiedMemberData?.data?.mb_name,
        surname: verifiedMemberData?.data?.mb_last_name,
        email: verifiedMemberData?.data?.mb_email,
        phone_number: verifiedMemberData?.data?.mb_phone,
        username: verifiedMemberData?.data?.mb_username,
      }}
      onFinish={onFinish}
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
            name="profile_photo"
            action="http://46.28.44.182:3002/client/member-update"
            fileList={fileList}
            onChange={handleUploadChange}
          >
            <Button
              type="primary"
              className="bg-cyan-500"
              icon={<UploadOutlined />}
            >
              Upload
            </Button>
          </Upload>
        </Form.Item>
      </Form.Item>
      <Button
        htmlType="submit"
        className="h-[40px] px-[10px] mt-[15px] bg-cyan-500"
        type="primary"
      >
        Save changes
      </Button>
    </Form>
  );
};

export default AccountDetails;
