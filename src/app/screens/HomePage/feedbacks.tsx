import { FC } from "react";
import { Typography } from 'antd';
import { Badge, Space } from 'antd';
import { Carousel, Card } from 'antd';


const { Text } = Typography;


const { Meta } = Card;

const roundedCardStyle = {
    width: 150,
    borderRadius: '90%',
};




const Feedbacks: FC = () => {
    return (
        <div >
            <div className="w-[90%] h-[466px] m-auto  flex justify-center items-center gap-[260px] ">
                <div>
                    <Space direction="vertical">
                        <Text className=" text-center text-black text-3xl font-bold font-['Noto Sans']">We carefully select doctors for our team</Text>
                        <Badge className=" mt-8 text-black text-2xl font-medium font-['Noto Sans']" color="rgb(45, 183, 245)" text="Experience from 8 years" />
                        <Badge className="text-black text-2xl font-medium font-['Noto Sans']" color="rgb(45, 183, 245)" text="From the best clinics in Tashkent" />
                        <Badge className="text-black text-2xl font-medium font-['Noto Sans']" color="rgb(45, 183, 245)" text="Specialized care" />
                    </Space>
                </div>
                <div className="w-[500px] " style={{ borderRadius: '20px', overflow: 'hidden'}} >
                    <Carousel autoplay autoplaySpeed={3200} >
                        <div >
                        <div >
                                <Card hoverable style={roundedCardStyle}>
                                    <img alt="example" src="/images/profile1.jpg" style={{ borderRadius: '50%' }} />
                                    <Meta title="Abror" />
                                </Card>
                            </div>
                            <Card style={{ width: 300 }}>
                                <p>From the moment I scheduled my appointment, the service provider demonstrated excellent communication and organization. The appointment booking was straightforward, and I appreciated the flexibility in choosing a time that suited my schedule. </p>
                                
                            </Card>
                        </div>
                        <div>
                            <div>
                                <Card hoverable style={roundedCardStyle}>
                                    <img alt="example" src="/images/profile1.jpg" style={{ borderRadius: '50%' }} />]
                                    <Meta title="Abror" />
                                </Card>
                            </div>
                            <Card style={{ width: 300 }}>
                                <p>From the moment I scheduled my appointment, the service provider demonstrated excellent communication and organization. The appointment booking was straightforward, and I appreciated the flexibility in choosing a time that suited my schedule. </p>
                                
                            </Card>
                        </div>
                        <div>
                            <div>
                                <Card hoverable style={roundedCardStyle}>
                                    <img alt="example" src="/images/profile1.jpg" style={{ borderRadius: '50%' }} />
                                    <Meta title="Abror" />
                                </Card>
                            </div>
                            <Card style={{ width: 300 }}>
                                <p>From the moment I scheduled my appointment, the service provider demonstrated excellent communication and organization. The appointment booking was straightforward, and I appreciated the flexibility in choosing a time that suited my schedule. </p>
                                
                            </Card>
                        </div>                        <div>
                            <div>
                                <Card hoverable style={roundedCardStyle} >
                                    <img alt="example" src="/images/profile1.jpg" style={{ borderRadius: '50%' }} />
                                    <Meta title="Abror" />
                                </Card>
                            </div>
                            <Card style={{ width: 300 }}>
                                <p>From the moment I scheduled my appointment, the service provider demonstrated excellent communication and organization. The appointment booking was straightforward, and I appreciated the flexibility in choosing a time that suited my schedule. </p>
                                
                            </Card>
                        </div>
                    </Carousel>
                </div>
            </div>

        </div>
    )
};

export default Feedbacks;