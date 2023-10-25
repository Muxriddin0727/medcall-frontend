import type { FC } from "react";
import { MainCardType } from "../../../../types/others";
import {
  Carousel,
  Card,
  Button,
  Select,
  Slider,
  Space,
  Badge,
  Rate,
  Image,
} from "antd";
import {
  WechatOutlined,
  DownOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";

type CardType = {
  value: MainCardType;
  clickNavigator: () => any;
};

const AllDoctors: FC = () => {
  return (
    <div className="w-[90%]   m-auto ">
      <Carousel className="" autoplay effect="scrollx">
        <Card bordered={false}>
          <div className=" bg-[#F5F5F5]  mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
            <div className="flex-[2] pl-10 ">
              <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
                WELCOME TO MEDCALL
              </h3>
              <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                LET'S CONNECT FOR YOUR
                <span className="text-[#3699af]">HEALTH</span>
              </h1>
              <p className=" py-[] text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px] ">
                Choose MedCalL Online Consulting Platform for a healthier, more
                convenient way to manage your health and well-being. Embrace the
                future of healthcare today and make every day a step towards a
                healthier, happier life
              </p>
              <div className="pb-8">
                <Button
                  type="primary"
                  className="mt-[40px] w-[140px]  bg-cyan-500 h-9 max-md:mt-[10px]"
                >
                  EXPLORE NOW
                </Button>
              </div>
            </div>
            <div className="flex-[1] relative  flex justify-center items-center max-md:hidden">
              <img src="/doctors/tablet.png" alt="flower_1" />
            </div>
          </div>
        </Card>

        <Card bordered={false}>
          <div className=" bg-[#F5F5F5]  mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
            <div className="flex-[2] pl-10 ">
              <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
                WELCOME TO MEDCALL
              </h3>
              <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                LET'S BEGIN YOUR JOURNEY TO
                <span className="text-[#3699af]">WELLNESS</span>
              </h1>
              <p className=" py-[] text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px] ">
                MedCall is your trusted destination for accessible, convenient,
                and expert medical advice and care. We bring the expertise of
                healthcare professionals to your fingertips, offering a
                comprehensive suite of telemedicine services tailored to your
                needs.
              </p>
              <div className="pb-8">
                <Button
                  type="primary"
                  className="mt-[40px] w-[140px]  bg-cyan-500 h-9 max-md:mt-[10px]"
                >
                  EXPLORE NOW
                </Button>
              </div>
            </div>
            <div className="flex-[1] relative  flex justify-center items-center max-md:hidden">
              <img src="/icons/korsatma.png" alt="flower_1" />
            </div>
          </div>
        </Card>

        <Card bordered={false}>
          <div className=" bg-[#F5F5F5]  mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
            <div className="flex-[2] pl-10 ">
              <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
                WELCOME TO MEDCALL
              </h3>
              <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                LET'S EMBRACE A DIGITAL PATH TO
                <span className="text-[#3699af]">HEALTH</span>
              </h1>
              <p className=" py-[] text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px] ">
                MedCall is committed to redefining healthcare, putting you at
                the forefront of your health journey. Take advantage of this
                seamless, secure, and comprehensive o nline healthcare solution
                for a healthier and more accessible future. Your well-being is
                our priority, nd we're here to support you every step of the
                way.
              </p>
              <div className="pb-8">
                <Button
                  type="primary"
                  className="mt-[40px] w-[140px]  bg-cyan-500 h-9 max-md:mt-[10px]"
                >
                  EXPLORE NOW
                </Button>
              </div>
            </div>
            <div className="flex-[1] relative  flex justify-center items-center max-md:hidden">
              <img src="/icons/bag.png" alt="flower_1" />
            </div>
          </div>
        </Card>
      </Carousel>

      <div className="grid grid-cols-[20%_80%] pb-14 pt-4 gap-4">
        <div className="grid grid-cols-1   p-4 bg-[#F5F5F5]  gap-4">
          <h3 className="  font-bold">Categories</h3>
          <div className="grid grid-cols-2 gap-4  m-auto mt-[10px] pl-[10px]">
            <h3>Cardiology</h3>
            <p>(12)</p>
            <h3>Neurology</h3>
            <p>(34)</p>
            <h3>Pediatrician</h3>
            <p>(45)</p>
            <h3>Psychology</h3>
            <p>(23)</p>
            <h3>Physician</h3>
            <p>(9)</p>
          </div>

          <div className="mt-[15px]">
            <h3 className="font-bold">Price Range</h3>
            <Slider
              className="w-[70%]"
              range
              defaultValue={[Number(10), Number(100)]}
              max={100}
            />
            <p className="font-normal">
              Price:{" "}
              <span className="font-bold text-[#40c0ce]">
                {[0]}$ - {[100]}$
              </span>
            </p>
            <Button
              type="primary"
              className="mt-[16px] bg-cyan-500  px-[23px]  rounded-lg"
            >
              Filter
            </Button>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-2 ">
            <div className="flex gap-10 pl-6 ">
              <h3 className="cursor-pointer font-normal transition-colors false   ">
                All Doctors
              </h3>
              <h3 className="cursor-pointer font-normal transition-colors pb-[3px] text-[#46A358] border-b border-[#46A358] max-sm:gap-4">
                Top Doctors
              </h3>
              <h3 className="cursor-pointer font-normal transition-colors false">
                Discount
              </h3>
            </div>
            <div className=" flex items-center w-full gap-2 max-lg:hidden justify-end">
              <p>Sort by:</p>
              <Select
                className="w-[30%]"
                defaultValue={"Default Sorting"}
                options={[
                  {
                    label: "Default Sorting",
                    value: "default-sorting",
                  },
                  {
                    label: "The Cheapest",
                    value: "the-cheapest",
                  },
                  {
                    label: "Most Expensive",
                    value: "most-expensive",
                  },
                ]}
              />
            </div>
          </div>

          <div className=" py-10 pl-6 gap-6 grid grid-cols-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <div className="bg-[#46A358] text-white absolute top-3 left-0 px-[5px] py-[3px]">
                    13% OFF
                  </div>
                  <img
                    width={180}
                    src="/doctors/david.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Cardiolog
                </h3>
                <p className="text-[#46A358] font-bold">
                  30 min - 20 000 UZS
                  <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
                    30 000 UZS
                  </span>
                </p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <img
                    width={180}
                    src="/doctors/nazir.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Neurolog
                </h3>
                <p className="text-[#46A358] font-bold">30 min - 30 000 UZS</p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <img
                    width={180}
                    src="/doctors/mark.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Pediatrician
                </h3>
                <p className="text-[#46A358] font-bold">30 min - 40 000 UZS</p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <img
                    width={180}
                    src="/doctors/dmitry.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Family Physician
                </h3>
                <p className="text-[#46A358] font-bold">30 min - 35 000 UZS</p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <div className="bg-[#46A358] text-white absolute top-3 left-0 px-[5px] py-[3px]">
                    15% OFF
                  </div>
                  <img
                    width={180}
                    src="/doctors/alisa.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Psychologist
                </h3>
                <p className="text-[#46A358] font-bold">
                  30 min - 25 000 UZS
                  <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
                    30 000 UZS
                  </span>
                </p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <img
                    width={180}
                    src="/doctors/maryam.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Gynecologist
                </h3>
                <p className="text-[#46A358] font-bold">30 min - 50 000 UZS</p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <img
                    width={180}
                    src="/doctors/dmitry.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Family Physician
                </h3>
                <p className="text-[#46A358] font-bold">30 min - 35 000 UZS</p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <div className="bg-[#46A358] text-white absolute top-3 left-0 px-[5px] py-[3px]">
                    15% OFF
                  </div>
                  <img
                    width={180}
                    src="/doctors/alisa.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Psychologist
                </h3>
                <p className="text-[#46A358] font-bold">
                  30 min - 25 000 UZS
                  <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
                    30 000 UZS
                  </span>
                </p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <img
                    width={180}
                    src="/doctors/maryam.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Gynecologist
                </h3>
                <p className="text-[#46A358] font-bold">30 min - 50 000 UZS</p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <img
                    width={180}
                    src="/doctors/dmitry.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Family Physician
                </h3>
                <p className="text-[#46A358] font-bold">30 min - 35 000 UZS</p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <div className="bg-[#46A358] text-white absolute top-3 left-0 px-[5px] py-[3px]">
                    15% OFF
                  </div>
                  <img
                    width={180}
                    src="/doctors/alisa.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Psychologist
                </h3>
                <p className="text-[#46A358] font-bold">
                  30 min - 25 000 UZS
                  <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
                    30 000 UZS
                  </span>
                </p>
              </div>
            </Card>

            <Card hoverable>
              <div className="">
                <div className="group h-[300px] white flex justify-center items-center relative">
                  <img
                    width={180}
                    src="/doctors/maryam.jpg"
                    alt="img"
                    className="w-[50%]"
                  />
                  <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <WechatOutlined />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                      <HeartFilled className="text-[red]" />
                    </div>
                    <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <h3 className="font-normal cursor-pointer mt-[12px]">
                  Gynecologist
                </h3>
                <p className="text-[#46A358] font-bold">30 min - 50 000 UZS</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;

{
}
