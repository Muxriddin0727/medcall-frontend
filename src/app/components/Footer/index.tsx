import { FC } from "react";
import { Row, Col } from "antd";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: FC = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5] mt-10 md:flex-row ">
        <div className="flex justify-between  bg-[#20f2e41a] p-[23px] max-lg:flex-col max-lg:items-center gap-2.5 max-md:w-1/2">
          <img
            src="/images/logo1.png"
            alt="logo"
            className="w-30 cursor-pointer ml-16 "
          />
          <div className="flex gap-2.5 items-center ">
            <img className="w-5 h-5" src="/icons/location.png" alt="location" />
            <p className="text-sm ">
              Uzbeksitan, Andijan <br /> Shahrikhan, Zakovot 65
            </p>
          </div>
          <div className="flex flex-col gap-2.5  mr-16">
            <div className="flex gap-2.5 items-center">
              <img className="w-5 h-5" src="/icons/email.png" alt={"email"} />
              <p className="text-sm">contact@medcall.com</p>
            </div>
            <div className="flex gap-2.5 items-center">
              <img className="w-5 h-5" src="/icons/call.png" alt={"call"} />
              <p className="text-sm">+8210 2159 9907</p>
            </div>
          </div>
        </div>
        <div className=" w-[90%] flex items-center justify-between mx-auto p-[23px] max-sm:flex-col max-sm:gap-4 max-md:w-1/2">
          <div className="flex flex-col gap-2.5">
            <h3 className="font-bold">Clinic Info</h3>
            <p className="font-light cursor-pointer"> Contact</p>
            <p className="font-light cursor-pointer">Address</p>
            <p className="font-light cursor-pointer">About Us</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="font-bold">Services</h3>
            <p className="font-light cursor-pointer">Appointments</p>
            <p className="font-light cursor-pointer">Emergancy Calls</p>
            <p className="font-light cursor-pointer">Walk in</p>
          </div>
          <div className="mb-12">
            <h3 className="font-bold">Social Media</h3>
            <div className="flex gap-3 mt-[20px] ">
              <div className="  w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <Facebook className="text-cyan-500" />
              </div>
              <div className=" w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <Instagram className="text-cyan-500" />
              </div>
              <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <Twitter className="text-cyan-500" />
              </div>{" "}
              <div className=" w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <Linkedin className="text-cyan-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center p-[10px] font-normal text-sm">
        © 2023 MedCall. All Rights Reserved.
      </h3>
    </div>
  );
};

export default Footer;
