import { FC } from "react";
import { Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Title } = Typography;
const { Meta } = Card;

const TopDoctors: FC = () => {
    return (
        <div className=' w-[90%] h-[541px] m-auto text-center'>
            <div className="w-full mt-4">
                <Title className="text-black text-4xl font-abold font-['Noto Sans']" level={1}>Meet Our Top Doctors</Title>
            </div>
            <div className="flex gap-40 w-full justify-center ">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="/doctors/alisa.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="/doctors/david.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="/doctors/mark.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="/doctors/dmitry.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>



            </div>
        </div>
    )
};

export default TopDoctors;