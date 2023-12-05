import { useReduxSelector } from "../../hooks";
import Register from "./Modals/Register";
import Book from "./Modals/Book";
import Chat from "./Modals/Chat";

const ModalVisibility = ()=> {
    const {authModal, bookModal, chatModal} = useReduxSelector((state) => state.modal);
    return (
    <>
    {authModal && <Register/>}
    {bookModal && <Book/>}
    {chatModal && <Chat/>} 
    </>
    );
};

export default ModalVisibility;