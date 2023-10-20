import {FC}  from "react";
import { Typography } from 'antd'

const {Title, Text } = Typography;

const Intro: FC = () => {
    return (
    <div className="className= w-full h-[463px] mt-6 bg-gradient-to-r from-cyan-100 via-white to-sky-100 " >
          <div >
            <Title className="mx-[600px] m  text-black text-4xl font-bold font-['Montserrat'] "level={1}>Our Priorities</Title>
        </div>
        <div className="flex justify-between">
        <div className="m-10 ml-16">
            <div className=' absolute top-[1045px] m-10 ml-16 left-[3px]'>
            <img 
              src="/images/doctor.png" 
              alt="shield"
              className="rounded"
              style={{ 
                clipPath: 'inset(0 0 0 0)', 
                zIndex: 1, 
                position: 'relative'
                 }}
              />
            </div>
            <div className="absolute top-[1038px]">
            <img src="/images/frame.png" alt="header"/>
            </div>
        </div>
        <div className=" w-[607px] h-[327px] m-16 mt-8" >
            <Text className=" text-black text-xl font-medium font-['Noto Sans']">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quamet, consectetur, adipisci velit, sed qu Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu sed quNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci. </Text>
        </div>
        </div>
    </div>
)};

export default Intro;