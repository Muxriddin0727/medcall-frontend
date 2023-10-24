import type {FC} from "react";
import {
    useReduxDispatch,
  } from "../../../../../hooks";
  import { Button, Form, Input, Divider } from "antd";
  import { createFromIconfontCN,  GoogleOutlined } from '@ant-design/icons';
  

  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });




const Signup:FC = () => {
    const dispatch = useReduxDispatch();

  

   
    return (
      <div className=" w-[full]  flex justify-between items-center mt-[20px] ">
        
      <Form className="w-[566px] m-auto">
        <div className="w-[90%] m-auto">
       
        

        <h2 className="py-3"> Enter your username and password to register.</h2>
        <Form.Item className="pb-3">
          <Input  className="h-[40px]" placeholder="Name" />
        </Form.Item>
        <Form.Item className="pb-3">
          <Input  className="h-[40px]" placeholder="Last Name" />
        </Form.Item>
        <Form.Item className="pb-3">
          <Input  className="h-[40px]" placeholder="Enter your email address" />
        </Form.Item>
        <Form.Item >
          <Input.Password className="h-[40px]"
          placeholder="Enter your password" 
         />
        </Form.Item>
        <Form.Item >
          <Input.Password className="h-[40px]"
          placeholder="Confirm your password" 
         />
        </Form.Item>
       
        <Form.Item >
          <Button className=" w-full h-[40px]  mt-4 bg-sky-500/75" type="primary">Login</Button>
        </Form.Item>
        <Divider plain>Or login with</Divider>
        <Form.Item >
          <Button  className=" w-full h-[40px]  " type="default" icon={<IconFont type="icon-facebook"></IconFont>} >Login with Facebook</Button>
        </Form.Item>

        <Form.Item >
          <Button className=" w-full h-[40px] " type="default" icon={<GoogleOutlined />}>Login with Google</Button>
        </Form.Item>
        </div>
      </Form>
    </div>

    )
};

export default Signup;