import {FC}  from "react";
import { Card } from 'antd';
import { Carousel } from 'antd';

        //UI//
const { Meta } = Card;
const contentStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "stretch",
    flexGrow: "1",
    height: "100%",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    color: '#fff',
    
  };
        //UI//

const Categories: FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide)
    };
    return (
     <div className="w-[full] h-[300px] ">
       {/* <div className=" w-[90%] mt-24 justify-center items-center m-8"> */}
             
                <Carousel  
                afterChange={onChange} 
                slidesToShow={5}
                style={{ display: "grid",
                alignItems: "stretch",
                justifyContent: "stretch",
                height: "200px",
                objectFit: "cover",
                flexGrow: "1",}} >
                <div className=" flex space-x-4" >
                <div style={contentStyle}>
                
                    <Card
                    hoverable
                    // style={{ width: 200  }}
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
                
                </div>
                <div  style={contentStyle}>
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
                </div>
                </div>

                </Carousel>

       {/* </div>  */}
      </div>
)};

export default Categories;