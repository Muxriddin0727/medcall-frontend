import {FC}  from "react";
import { Card } from 'antd';
import { Carousel } from 'antd';

        //UI//
const { Meta } = Card;
const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
        //UI//

const Categories: FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide)
    };
    return (
    // <div className="w-[full] h-[300px] ">
    //     <div className=" w-[90%] mt-24 justify-center items-center m-8">
    //         <div className="flex ">
                <Carousel afterChange={onChange}>
                
                
                <Card
                    hoverable
                    style={{ width: 200  }}
                    cover ={<img style={{width: "150px", height:'150px', margin:"auto" }} alt="example" src="/images/kid.jpg" />}
                >
                <Meta title="Europe Street beat"  />
                </Card>

                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover ={<img style={{width: "150px", height:'150px', margin:"auto" }} alt="example" src="/images/neuro.jpg" />}
                >
                <Meta title="Europe Street beat" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover ={<img style={{width: "150px", height:'150px', margin:"auto" }} alt="example" src="/images/cardio.jpg" />}
                >
                <Meta title="Europe Street beat" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover ={<img style={{width: "170px", height:'160px', margin:"auto" }}  alt="example" src="/images/dermo.jpg" />}
                >
                <Meta title="Europe Street beat"  />
                </Card>

                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover ={<img style={{width: "150px", height:'150px', margin:"auto" }} alt="example" src="/images/otol.jpg" />}
                >
                <Meta title="Europe Street beat"  />
                </Card>

                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover ={<img style={{width: "150px", height:'150px', margin:"auto" }} alt="example" src="/images/psycho.jpg" />}
                >
                <Meta title="Europe Street beat" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover ={<img style={{width: "150px", height:'150px', margin:"auto" }} alt="example" src="/images/gyno.jpg" />}
                >
                <Meta title="Europe Street beat"/>
                </Card>

                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover ={<img style={{width: "150px", height:'150px', margin:"auto" }} alt="example" src="/images/alergist.jpg" />}
                >
                <Meta title="Europe Street beat"  />
                </Card>

                </Carousel>

    //         </div>
    //     </div>
    // </div>
)};

export default Categories;