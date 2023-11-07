import type { FC } from "react";
import { useState } from "react";
import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks";
import { setAuthModal } from "../../../../redux/modalSlice";
import Login from "./Login";
import Signup from "./Signup";



const Register: FC = (props: any) => {
  const { authModal } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();
  const [active, setActive] = useState<"login" | "signup" | "logout">("login");




  return (
    <Modal
      footer={false}
      onCancel={() => dispatch(setAuthModal())}
      open={authModal}

    >
      <div className="flex gap-2.5 items-center justify-center mt-6">
        <h3
          tabIndex={0}
          onClick={() => setActive("login")}
          className={`cursor-pointer text-xl transition-all ${active === "login" && "text-[#19BCE4]"
            }`}
        >
          Login
        </h3>
        <div className="border h-4 bg-[#3D3D3D]"></div>
        <h3
          tabIndex={0}
          onClick={() => setActive("signup")}
          className={`cursor-pointer text-xl transition-all ${active === "signup" && "text-[#19BCE4]"
            }`}
        >
          Register
        </h3>

        <h3
          tabIndex={0}
          onClick={() => setActive("logout")}
          className={`cursor-pointer text-xl transition-all ${active === "logout" && "text-[#19BCE4]"
            }`}
        >
          
        </h3>
      </div>
      {active === "login" ? <Login /> : <Signup />}
    </Modal>
  );
};

export default Register;
