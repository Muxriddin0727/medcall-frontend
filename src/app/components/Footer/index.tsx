import { FC } from "react";
import { Row, Col } from "antd";

const Footer: FC = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5]">
        <div className="flex justify-between bg-[#20f2e41a] p-[23px] max-lg:flex-col max-lg:items-center gap-2.5">
          <img
            src="/images/logo.png"
            alt="logo"
            className="cursor-pointer w-[150px]"
          />
          <div className="flex gap-2.5 items-center">
            <img className="w-5 h-5" src="/icons/location.png" alt="location" />
            <p className="text-sm">
              Uzbeksitan, Andijan <br /> Shahrikhan, Zakovot 65
            </p>
          </div>
          <div className="flex gap-2.5 items-center">
            <img className="w-5 h-5" src="/icons/email.png" alt={"email"} />
            <p className="text-sm">contact@medcall.com</p>
          </div>
          <div className="flex gap-2.5 items-center">
            <img className="w-5 h-5" src="/icons/call.png" alt={"call"} />
            <p className="text-sm">+8210 2159 9907</p>
          </div>
        </div>
        <div className="flex justify-between w-[90%] m-auto p-[23px] max-sm:flex-col max-sm:gap-4">
          <div className="flex flex-1 flex-col gap-2.5">
            <h3 className="font-bold">My Account</h3>
            <p className="font-light cursor-pointer">My Account</p>
            <p className="font-light cursor-pointer">Address</p>
            <p className="font-light cursor-pointer">About Us</p>
          </div>
          <div className="flex-1 flex flex-col gap-2.5">
            <h3 className="font-bold">Categories</h3>
            <p className="font-light cursor-pointer">Cardiologist</p>
            <p className="font-light cursor-pointer">Psychologist</p>
            <p className="font-light cursor-pointer">Neurologist</p>
            <p className="font-light cursor-pointer">Pediatrician</p>
            <p className="font-light cursor-pointer">Family Physician</p>
          </div>
          <div className="flex-1 ">
            <h3 className="font-bold">Social Media</h3>
            <div className="flex gap-3 mt-[20px] ">
              <div className="border  w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <img src="/icons/facebook.png" alt="facebook_green" />
              </div>
              <div className="border w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <img src="/icons/instagram.png" alt="instagram_green" />
              </div>
              <div className="border  w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <img src="/icons/x.png" alt="twitter_green" />
              </div>{" "}
              <div className="border  w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <img src="/icons/linked.png" alt="linkedin_green" />
              </div>
            </div>
            <h3 className="font-bold mt-[33px]">We accept</h3>
            <div className="flex gap-3 mt-[20px]">
              <img
                className="w-[30px] h-[30px] cursor-pointer"
                src="/icons/paypal.png"
                alt="paypal"
              />
              <img
                className="w-[30px] h-[30px] cursor-pointer"
                src="data:image/jpeg;base64,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"
                alt="master_card"
              />
              <img
                className="w-[30px] h-[30px] cursor-pointer"
                src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png"
                alt="visa"
              />
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
