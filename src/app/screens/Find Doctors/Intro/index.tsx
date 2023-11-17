import { Carousel } from "antd";
import type { FC } from "react";
import Card from "./Card";
import { intro_data } from "../../../../lib";

const Intro: FC = () => {
  return (
    <div className="w-[90%] m-auto mb-[30px]">
      <Carousel autoplay effect="scrollx">
        {intro_data?.map((value) => (
          <div key={value.id}>
            <Card
              {...value}
              //  id ={value.id}
              //  title= {value.title}
              //  description={value.description}
              //  buttonText={value.buttonText}
              //  src={value.src}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Intro;
