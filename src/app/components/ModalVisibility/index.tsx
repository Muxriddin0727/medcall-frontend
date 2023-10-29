import { useReduxSelector } from "../../hooks";
import Register from "./Modals/Register";
import Book from "./Modals/Book";

const ModalVisibility = ()=> {
    const {authModal, bookModal} = useReduxSelector((state) => state.modal);
    return (
    <>
    {authModal && <Register/>}
    {bookModal && <Book/>}
    </>
    );
};

export default ModalVisibility;