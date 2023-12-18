import type { FC } from "react";
import { Tabs, Collapse, List, Form, Input, Button  } from 'antd';

const { TabPane } = Tabs;
const { Panel } = Collapse;



const Help: FC= () => {
  return (
    <div className="w-[90%] m-auto">
         <Tabs defaultActiveKey="1">
      <TabPane tab="F A Q" key="1" className="w-[80%] m-auto my-12" >
       
        <Collapse>
          <Panel header="How can I schedule an online medical consultation?" key="1">
          You can schedule a consultation by signing up on our platform, selecting a healthcare provider, and choosing an available time slot that suits you.
          </Panel>
          <Panel header="Are online medical consultations secure and confidential?" key="2">
          Yes, we prioritize the security and confidentiality of your information. Our platform uses encryption and follows strict privacy regulations to ensure your data is protected.
          </Panel>
          <Panel header="What types of healthcare professionals are available for consultations?" key="3">
          We offer a diverse range of healthcare professionals, including doctors, specialists, therapists, and counselors, among others.
          </Panel>
          <Panel header="Can I get prescriptions during an online consultation?" key="4">
          Yes, some of our healthcare providers can prescribe medication during the consultation if deemed necessary for your treatment.
          </Panel>
          <Panel header=" What do I need for a video consultation?" key="5">
          You'll need a device with a camera and microphone, as well as a stable internet connection. Our platform will guide you through the setup.
          </Panel>
          <Panel header=" How do I pay for online medical consultations?" key="6">
          You can make payments using various methods, including credit/debit cards or other accepted payment options when booking your consultation.
          </Panel>
          <Panel header="What if I have technical issues during a consultation?" key="7">
          In case of technical difficulties, our support team is available to assist you. We also recommend performing a pre-consultation test to ensure a smooth experience.
          </Panel>
          <Panel header="What do I do in case of an emergency or urgent medical issue?" key="8">
          What do I do in case of an emergency or urgent medical issue?
          </Panel>
        </Collapse>
      </TabPane>
      <TabPane tab="Rules" key="2" className="w-[90%] m-auto my-12">
      <List
      className="w-fit m-auto"
          dataSource={
            ['Provide accurate and comprehensive information about your medical history to aid the consultation.', 
            'Be on time for your scheduled online appointments with healthcare providers.', 
            ' Prepare your questions and concerns in advance to make the most of your consultation time.',
            ' In case of emergencies or urgent medical issues, seek immediate in-person medical care; the platform is not for such situations.',
            'Follow prescribed treatments and medications as advised by your healthcare provider.',
            'Maintain a respectful and courteous tone during your consultations, promoting a positive and productive interaction.',
        
        ]} 
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </TabPane>
      <TabPane tab="Send message to Admin" key="9" className="w-[90%] m-auto my-12  flex justify-center" >
      <Form className="w-[60%]  "
      name="admin-message"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      layout="vertical"
    >
        <h2 className="font-medium text-[16px] my-4"> Fill the below form to send a message to an admin</h2>
      <Form.Item
      className="font-medium text-[20px]"
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Your Name" />
      </Form.Item>

      <Form.Item
      className="font-medium text-[20px]"
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' }
        ]}
      >
        <Input placeholder="Your Email" />
      </Form.Item>

      <Form.Item
      className="font-medium text-[20px]"
        label="Message"
        name="message"
        rules={[{ message: 'Please enter your message' }]}
      >
        <Input.TextArea placeholder="Your Message" autoSize={{ minRows: 4, maxRows: 8 }} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
       
      </Form.Item>
      <Button type="primary" htmlType="submit" className="w-[130px] h-[40px] bg-sky-500">
          Send
        </Button>
    </Form>
      </TabPane>
    </Tabs>

    <div>
    <iframe
            className="rounded-xl w-full m-auto shadow-md my-20"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            width="1320px"
            height="500"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
    </div>
     
    </div>
    
  );
};

export default Help;
