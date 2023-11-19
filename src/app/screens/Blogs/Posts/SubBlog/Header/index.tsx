import { FC } from "react";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Blog } from "../../../../../../types/blogs";
import { FindDoctors } from "../../../../../../types/user";

const Header: FC<{ value: FindDoctors }> = ({ value }) => {
  return (
    <div className="w-full m-auto my-8 grid justify-between grid-flow-col ">
      <div className=" flex gap-6">
        <Avatar size={72} icon={<UserOutlined />} />
        <div className="">
          <h2 className="text-center font-bold text-xl">
            {value.mb_name} {value.mb_last_name}
          </h2>
          <p className=" text-gray-500">{value.mb_follow_cnt}</p>
        </div>
      </div>
      <Button className=" m-auto my-6 bg-cyan-500 " type="primary">
        Follow
      </Button>
    </div>
  );
};

export default Header;
