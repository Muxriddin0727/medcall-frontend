import {FC}  from "react";
import Authentication from "./Modals/Authorization";
import { useReduxSelector } from "../../hooks"

const ModalVisibility = () => {
  const{
      AuthenticationModal,
  } = useReduxSelector((state) =>state.homePage);

return (
  <>
      {AuthenticationModal.open && <Authentication/>}
    
  </>
);
};

export default ModalVisibility;