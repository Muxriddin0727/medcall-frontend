import { FC, useEffect, useState } from "react";
import { Modal, Avatar, Tooltip, Button, Input, Pagination } from "antd";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../../../../lib/sweetAlert";
import { Comment } from "../../../../../../types/others";
import { setMemberCommentsModal } from "../../../../../redux/modalSlice";
import { useReduxDispatch, useReduxSelector } from "../../../../../hooks";
import { useAxios } from "../../../../../customHooks/useAxios";
import { verifiedMemberData } from "../../../../../api/verify";

const MemberComments: FC = () => {
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const { memberCommentsModal } = useReduxSelector((state) => state.modal);
  const [commented, setCommented] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;
  

  const commentHandler = async () => {
    console.log("commenthandler called");
    try {
      if (commentText.trim() !== "") {
        const newComment = {
          _id: verifiedMemberData._id,
          mb_name: verifiedMemberData.mb_name,
          comment_content: commentText,
          mb_image: verifiedMemberData.mb_image,
          posted_at: new Date(Date.now()),
        };
        setCommented([...commented, newComment]);
        await axios({
          url: `/client/member-comment`,
          method: "POST",
          body: {
            mb_id: memberCommentsModal.mb_id, // assuming blogCommentsModal has a blog_id property
            ...newComment,
          },
        });

        setCommentText("");

        sweetTopSmallSuccessAlert("Comment Added Successfully");
      }
    } catch (error) {
      sweetErrorHandling(
        new Error("Something went wrong with commenting"),
        false
      );
      console.error("error:", error);
    }
  };
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  useEffect(() => {
    if (memberCommentsModal.isOpen) {
      // Fetch comments from server when modal opens
      const fetchComments = async () => {
        try {
          const response = await axios({
            url: `/client/member-comments/${memberCommentsModal.mb_id}`,
            method: "GET",
          });
          setCommented(response.data.comments);
          console.log(response.data.comments);
        } catch (error) {
          console.error("Failed to fetch comments:", error);
        }
      };

      fetchComments();
    }
  }, [memberCommentsModal.isOpen, memberCommentsModal.mb_id]);

  return (
    <Modal
      className="flex flex-col rounded-3xl "
      title="Comments"
      open={memberCommentsModal.isOpen}
      footer={false}
      onCancel={() =>
        dispatch(
          setMemberCommentsModal({
            isOpen: false,
            mb_id: memberCommentsModal.mb_id,
          })
        )
      }
    >
      <div className="space-y-4 flex-col">
        <div className="flex items-center space-x-4">
          <Input
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
            className="flex-grow"
          />
          <Button
            type="primary"
            className="bg-cyan-500"
            onClick={commentHandler}
          >
            Comment
          </Button>
        </div>
        {commented

          .slice(
            (currentPage - 1) * commentsPerPage,
            currentPage * commentsPerPage
          )

          .map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-md flex items-start space-x-4"
            >
              <Avatar
                src={comment.mb_image || "/icons/default_user.png"}
                alt="author"
                className="flex-shrink-0"
              />
              <div>
                <div className="text-gray-800 font-medium">
                  {comment.mb_name}
                </div>
                <p className="text-gray-800">{comment.comment_content}</p>
                <Tooltip title="Date">
                  <span className="text-gray-500">
                    {comment.posted_at.toLocaleString()}
                  </span>
                </Tooltip>
              </div>
            </div>
          ))}
        <Pagination
          className="w-ful"
          responsive
          hideOnSinglePage
          current={currentPage}
          total={commented.length}
          pageSize={commentsPerPage}
          onChange={setCurrentPage}
        />
      </div>
    </Modal>
  );
};

export default MemberComments;
