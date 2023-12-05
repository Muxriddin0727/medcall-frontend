import React, { useEffect, useState } from "react";
import { FC } from "react";
import {
  Modal,
  Input,
  DatePicker,
  Button,
  Steps,
  DatePickerProps,
  Tag,
} from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks";
import { setBookModal } from "../../../../redux/modalSlice";
import { useAxios } from "../../../../customHooks/useAxios";

const Book: FC = () => {
  const axios = useAxios();
  const { bookModal } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [slots, setSlots] = useState<any>([]);


  const doctor_id =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  const steps = [
    {
      title: "Select Date",
      content: () =>
        currentStep === 0 ? (
          <div>
            <DatePicker
              disabledDate={(e) =>
                e.isBefore(new Date().setDate(new Date().getDate() - 1))
              }
              onChange={onChange}
            />
            <div className="steps-action">
              {currentStep < steps.length - 1 && (
                <Button
                  className="bg-sky-500/100 m-2"
                  type="primary"
                  onClick={async () => {
                    if (!selectedDate) return;
                    const data = await axios({
                      url: `/client/appointments/${doctor_id}?date=${selectedDate}`,
                    });
                    console.log("data:", data.data.slots);
                    setSlots(data.data.slots);
                    setCurrentStep(currentStep + 1);                  }}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        ) : null,
    },
    {
      title: "Select Time",
      content: () =>
        currentStep === 1 ? (
          <div>
            {slots?.map((value: any) => (
              <Tag
              key = {value._id}
                className="cursor-pointer m-2"
                color={`${
                  value.ref_id
                    ? "deafault"
                    : value.isSelected
                    ? "processing"
                    : "success"
                }`}
                onClick={() =>
                  !value.isSelected &&
                  setSlots(
                    slots.map((slotValue: any) =>
                      slotValue._id === value._id
                        ? { ...slotValue, isSelected: true }
                        : {
                            _id: slotValue._id,
                            ref_id: slotValue.ref_id,
                            start: slotValue.start,
                            end: slotValue.end,
                          }
                    )
                  )
                }
              >
                {value.start} - {value.end}
              </Tag>
            ))}
            <div className="steps-action">
              {currentStep < steps.length - 1 && (
                <Button
                  className="bg-sky-500/100 m-2"
                  type="primary"
                  onClick={() => {
                    const selectedSlot = slots.filter(
                      (value: any) => value.isSelected
                    );
                    if (!selectedSlot.length) return;
                    setCurrentStep(currentStep + 1);
                  }}
                >
                  Next
                </Button>
              )}
              {currentStep > 0 && (
                <Button
                  className="bg-sky-500/100 m-2"
                  type="primary"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </Button>
              )}
            </div>
          </div>
        ) : null,
    },
   
  ];

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setSelectedDate(
      new Date(dateString.replaceAll("-", "."))
        .toLocaleDateString()
        .replaceAll("/", ".")
    );
  };

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const back = () => {
    setCurrentStep(currentStep - 1);
  };

  const submit = () => {
    const selectedSlot = slots.filter((value: any) => value.isSelected);

    axios({
      url: `/client/create-appointment/${doctor_id}?date=${selectedDate}`,
      method: "POST",
      body: {
        slot_id: selectedSlot[0]._id,
        mem_id: JSON.parse(String(localStorage.getItem("member_data")))._id,
      },
    }).then((res) => {
      dispatch(setBookModal());
    });
  };

  return (
    <Modal
      title="Book an Appointment"
      open={bookModal}
      footer={false}
      onCancel={() => dispatch(setBookModal())}
    >
      <div className=" w-/4 m-4 flex-col  items-center m ">
        <Steps direction="vertical" current={currentStep}>
          {steps.map((step, index) => (
            <Steps.Step
              key={index}
              title={step.title}
              description={step.content()}
            />
          ))}
        </Steps>
        {currentStep === steps.length - 1 && (
          <Button
            className="bg-sky-500/100 w-full text-center"
            type="primary"
            onClick={submit}
          >
            Submit
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default Book;
