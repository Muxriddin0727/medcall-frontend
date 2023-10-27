import { Carousel } from "antd";
import type {FC}from "react";
import Card1 from "./Card1"
import Card3 from "./Card3";
import Card2 from "./Card2";


const Intro:FC = () => {
    return (
        <div className="w-[90%] m-auto mb-[30px]">
            <Carousel  autoplay effect="scrollx">
                <div>
                   <Card1/>
                </div>
                <div>
                   <Card2/>
                </div>
                <div>
                   <Card3/>
                </div>
            </Carousel>
        </div>
    )
}

export default Intro;
