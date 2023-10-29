import type { FC } from "react";
import { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  DatePickerProps,
  TimePicker,
  Button,
  
} from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks";
import { setBookModal } from "../../../../redux/modalSlice";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const Book: FC = () => {
    const { bookModal } = useReduxSelector((state) => state.modal);
    const dispatch = useReduxDispatch();

  return (
    <Modal 
    title="Book an Appointment" 
    open={bookModal} 
    footer={false}
    onCancel={() =>
        dispatch(
          setBookModal())}
      
    >
      <div className=" w-[full]  flex justify-between items-center mt-[20px] ">
        <Form 
        layout="vertical" 
        className="w-[566px] h-[472px] m-auto">
          <div className="w-[90%] m-auto">
            <Form.Item label="Name" className="pb-3">
              <Input className="h-[40px]" placeholder="David John" />
            </Form.Item>
            <Form.Item label="Medical Record Number">
              <Input className="h-[40px]" placeholder="1234 5678 91011" />
            </Form.Item>

            <Form.Item label="Visit Type">
              <Select>
                <Select.Option value="demo">First Visit</Select.Option>
                <Select.Option value="demo">Chronic Visit</Select.Option>
                <Select.Option value="demo">Urgent Visit</Select.Option>
              </Select>
            </Form.Item>
            <div className="flex gap-8">
              <Form.Item label="Date">
                <DatePicker onChange={onChange} />
              </Form.Item>

              <Form.Item label="Time">
                <TimePicker.RangePicker
                  minuteStep={30}
                  showSecond={false}
                  format="h:mm"
                  disabledTime={() => {
                    return {
                      disabledHours: () => {
                        return [0, 1, 2, 3, 4, 5, 6, 22, 23];
                      },
                      disabledMinutes: () => {
                        return [
                          ...Array.from({ length: 28 }).map(
                            (_, idx) => idx + 2
                          ),
                          ...Array.from({ length: 29 }).map(
                            (_, idx) => idx + 31
                          ),
                        ];
                      },
                    };
                  }}
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                className=" w-full h-[40px]  mt-4 bg-sky-500/75"
                type="primary"
              >
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default Book;
