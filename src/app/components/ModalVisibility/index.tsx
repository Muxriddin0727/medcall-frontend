import {FC}  from "react";
import Authentication from "./Modals/Authorization";
import { useReduxSelector } from "../../hooks"

const ModalVisibility = () => {
  const{authModal,} = useReduxSelector((state) =>state.modal);

return (
  <>
      {authModal&& <Authentication/>}
    
  </>
);
};

export default ModalVisibility;