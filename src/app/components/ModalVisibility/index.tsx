import { useReduxSelector } from "../../hooks";
import Register from "./Modals/Register";
import Book from "./Modals/Book";
import Chat from "./Modals/Chat";
import BlogComments from "./Modals/Comments/BlogComments";
import MemberComments from "./Modals/Comments/MemberComment";


const ModalVisibility = ()=> {
    const {authModal, bookModal, chatModal, blogCommentsModal, memberCommentsModal} = useReduxSelector((state) => state.modal);
    return (
    <>
    {authModal && <Register/>}
    {bookModal && <Book/>}
    <Chat/>
    {blogCommentsModal && <BlogComments/>}
    {memberCommentsModal && <MemberComments/>}

    </>
    );
};

export default ModalVisibility;