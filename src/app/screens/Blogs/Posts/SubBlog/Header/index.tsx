import { FC } from "react";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FindDoctors } from "../../../../../../types/user";

const Header: FC<{ value: FindDoctors }> = ({ value }) => {
  return (
    <div className="w-full m-auto my-8 grid justify-between grid-flow-col ">
      <div className=" flex gap-6">
        <Avatar 
        size={72} 
        src= {value.mb_image ? `http://46.28.44.182:3002/${value.mb_image}` : "/icons/default_user.png"}
       />
        <div className="">
          <h2 className="text-center font-bold text-xl">
           Dr. {value.mb_name} {value.mb_last_name}
          </h2>
          <p className=" text-gray-500">{value.mb_email}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
