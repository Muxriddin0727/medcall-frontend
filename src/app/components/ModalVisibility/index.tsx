import { useReduxSelector } from "../../hooks";
import Register from "./Modals/Register";

const ModalVisibility = ()=> {
    const {authModal} = useReduxSelector((state) => state.modal);
    return<>{authModal && <Register/>}</>;
};

export default ModalVisibility;