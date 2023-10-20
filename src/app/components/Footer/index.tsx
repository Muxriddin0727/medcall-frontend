import { FC } from "react";
import { Row, Col } from 'antd';


const Footer: FC = () => {
    return (
        <div className="footer_config bg-sky-100">
            <div>
                <Row className="main_footer_container">
                    <Col span={8} className="info">
                        <div className="m-8 flex flex-col items-center">
                            <img src="/images/logo.png" alt="" className="w-64" />
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing Keep in mind <br/>that the value of '50%' for borderRadius creates a perfect circle. <br/>elit, sed do eiusmod tempor Sed ut perspiciatis unde omnis iste
                            </p>
                            <div className="flex justify-center mt-2">
                                <img src="/icons/facebook.png" alt="" className="w-6" />
                                <img src="/icons/twitter.png" alt="" className="w-6 ml-2" />
                                <img src="/icons/instagram.png" alt="" className="w-6 ml-2" />
                                <img src="/icons/youtube.png" alt="" className="w-6 ml-2" />
                            </div>
                        </div>
                    </Col>
                    <Col span={8} className="parts">
                        <div className="text-center">
                            <div className=" m-8 part_subject">Bo'limlar</div>
                            <div className="h-0.5 bg-gray-300 mt-1"></div>
                            <div className="targets ">Home<br/>Find Doctors <br/> Blogs <br/> Help</div>
                        </div>
                    </Col>
                    <Col span={8} className="find_us">
                        <div className="text-center">
                            <div className="m-8 find">About Us</div>
                            <div className="h-0.5 bg-gray-300 mt-1"></div>
                            <div className="details mt-2">
                                <div className="flex items-center">
                                    <div className="detail_first">L.</div>
                                    <div className="detail_second">Uzbekistan</div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="detail_first">P.</div>
                                    <div className="detail_second">+998 - 99 266 25 62</div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="detail_first">E.</div>
                                    <div className="detail_second">medCall@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="h-0.5 bg-gray-300 my-4"></div>
                <div className="text-center text-gray-500">
                    Copyright MedCall 202, All right reserved.
                </div>
            </div>
        </div>
    )
};

export default Footer;