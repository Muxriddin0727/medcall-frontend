import type { FC } from "react";
import {
  Descriptions,
  Rate,
  List,
  Skeleton,
  Avatar,
  Tooltip,
  Button,
  Badge,
} from "antd";
import { useReduxDispatch } from "../../../hooks";
import { setBookModal } from "../../../redux/modalSlice";
import { FindDoctors } from "../../../.././types/user";

const DoctorInfo: FC<{ value: FindDoctors }> = ({ value }) => {
  const dispatch = useReduxDispatch();

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Tooltip title={value.mb_name}>
            <Avatar
              className="rounded-full w-[50px] h-[50px] cursor-pointer"
              src={`http://46.28.44.182:3002/${value.mb_image}`}
              alt="david"
            />
          </Tooltip>

          <div>
            <h1 className="font-bold text-[28px]">
              Dr. {value.mb_name} {value.mb_last_name}
            </h1>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center font-light text-[12px]">
          <Rate defaultValue={20} /> <p> Customer Review</p>
        </div>
      </div>
      <div className="border border-[#0EA5E9] mt-[12px]" />

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mt-[12px]">
          <h3 className="font-medium text-[20px]">Dagrees</h3>
          <Badge
            className="font-medium text-[20px]"
            color="#0EA5E9"
            text={value.mb_degree}
          />
        </div>

        <div className="mt-[12px]">
          <h3 className="font-medium text-[20px]">Experience</h3>
          <Badge
            className="font-medium text-[20px]"
            color="#0EA5E9"
            text={value.mb_experience}
          />
        </div>
      </div>

      <div className="flex justify-between items-end ">
        <List split={false} className="mt-[24px] flex-grow">
          <List.Item>
            <List.Item.Meta title="Contact:" description={value.mb_email} />
          </List.Item>
          <List.Item>
            <List.Item.Meta title="Office Hours:" description="8.00 - 19.30" />
          </List.Item>
        </List>
        <Button
          onClick={() => dispatch(setBookModal())}
          type="primary"
          className="w-[130px] h-[40px] bg-sky-500/100"
        >
          Book
        </Button>
      </div>
    </div>
  );
};

export default DoctorInfo;
