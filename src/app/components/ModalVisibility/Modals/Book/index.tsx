import React, { useState } from "react";
import { FC } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Button,
  Steps,
  DatePickerProps,
} from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks";
import { setBookModal } from "../../../../redux/modalSlice";

const Book: FC = () => {
  const { bookModal } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Select Date",
      content: () =>
        currentStep === 0 ? (
          <div>
            <DatePicker onChange={onChange} />
            <div className="steps-action">
              {currentStep < steps.length - 1 && (
                <Button
                  className="bg-sky-500/100 m-2"
                  type="primary"
                  onClick={() => setCurrentStep(currentStep + 1)}
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
                      ...Array.from({ length: 28 })?.map((_, idx) => idx + 2),
                      ...Array.from({ length: 29 })?.map((_, idx) => idx + 31),
                    ];
                  },
                };
              }}
            />
            <div className="steps-action">
              {currentStep < steps.length - 1 && (
                <Button
                  className="bg-sky-500/100 m-2"
                  type="primary"
                  onClick={() => setCurrentStep(currentStep + 1)}
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
    {
      title: "Enter Phone Number",
      content: () =>
        currentStep === 2 ? (
          <div>
            <Input placeholder="Enter phone number" />
            <div className="steps-action">
              {currentStep < steps.length - 1 && (
                <Button
                  className="bg-sky-500/100 m-2"
                  type="primary"
                  onClick={() => setCurrentStep(currentStep + 1)}
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
    console.log(date, dateString);
  };

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const back = () => {
    setCurrentStep(currentStep - 1);
  };

  const submit = () => {
    // handle form submission here
    // add all steps data to the database
    console.log("Form submitted");
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
          <Button className="bg-sky-500/100 w-full text-center" type="primary" onClick={submit}>
            Submit
          </Button>
        )}
      </div>
    </Modal>
    
  );
};

export default Book;
