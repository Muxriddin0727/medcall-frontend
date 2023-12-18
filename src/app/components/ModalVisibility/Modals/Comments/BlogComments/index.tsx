import { FC, useEffect, useState } from "react";
import { Modal, Avatar, Tooltip, Button, Input, Pagination } from "antd";
import { setBlogCommentsModal } from "../../../../../redux/modalSlice";
import { useReduxDispatch, useReduxSelector } from "../../../../../hooks";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../../../../lib/sweetAlert";
import { useAxios } from "../../../../../customHooks/useAxios";
import { Comment } from "../../../../../../types/others";
import { verifiedMemberData } from "../../../../../api/verify";


const BlogComments: FC = () => {
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const { blogCommentsModal } = useReduxSelector((state) => state.modal);
  const [commented, setCommented] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
 
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  const commentHandler = async () => {
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
          url: `/client/blog-comment`,
          method: "POST",
          body: {
            blog_id: blogCommentsModal.blog_id, // assuming blogCommentsModal has a blog_id property
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
    if (blogCommentsModal.isOpen) {
      // Fetch comments from server when modal opens
      const fetchComments = async () => {
        try {
          const response = await axios({
            url: `/client/blog-comments/${blogCommentsModal.blog_id}`, 
            method: "GET",
          });
          if (response.data.comments) {
            setCommented(response.data.comments.reverse());
          } else {
            console.error('Comments not found in response data');
          }
        } catch (error) {
          console.error("Failed to fetch comments:", error);
        }
      };

      fetchComments();
    }
  }, [blogCommentsModal.isOpen, blogCommentsModal.blog_id]);

  return (
    <Modal
      className="flex flex-col rounded-3xl "
      title="Comments"
      open={blogCommentsModal.isOpen}
      footer={false}
      onCancel={() =>
        dispatch(
          setBlogCommentsModal({
            isOpen: false,
            blog_id: blogCommentsModal.blog_id,
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

export default BlogComments;
