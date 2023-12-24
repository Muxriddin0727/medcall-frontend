import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { SocketContext } from "../../../../context/socket";
import { Avatar, Input, Badge, Modal, Tag, Popover, Button } from "antd";
import { SendOutlined, SmileOutlined } from "@ant-design/icons";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../../../lib/sweetAlert";
import {
  ChatGreetMsg,
  ChatInfoMsg,
  ChatMessage,
  StickerPickerProps,
} from "../../../../../types/others";
import { setChatModal } from "../../../../redux/modalSlice";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks";
import { Definer } from "../../../../../lib/Definer";
import assert from "assert";
import { verifiedMemberData } from "../../../../api/verify";

const NewMessage = (data: ChatMessage) => {
  const isCurrentUser =
    verifiedMemberData && data.new_message.mb_id === verifiedMemberData._id;
  console.log("isCurrentUser", isCurrentUser);
  console.log("data.new_message", data);
  return (
    <div
      className={`flex ${
        isCurrentUser ? "flex-row-reverse" : "flex-row"
      } gap-3  m-2.5`}
    >
      {isCurrentUser && (
        <Avatar
          alt={data.new_message.mb_name}
          src={data.new_message.mb_image || "icons/default_user.png"}
        />
      )}
      <div
        className={`message-bubble ${isCurrentUser ? "msg_right" : "msg_left"}`}
      >
        {data.new_message.msg}
      </div>
    </div>
  );
};

const Chat: FC = () => {
  const { chatModal } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();
  const [messageLists, setMessageLists] = useState([]);
  const socket = useContext(SocketContext);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const textInput: any = useRef(null);
  const [message, setMessage] = useState<string>("");
  const [showStickerPicker, setShowStickerPicker] = useState(false);
  const StickerPicker: React.FC<StickerPickerProps> = ({ onStickerClick }) => {
    const stickers = [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "😂",
      "🤣",
      "😊",
      "😇",
      "🙂",
      "🙃",
      "😉",
      "😌",
      "😍",
      "🥰",
      "😘",
      "😗",
      "😙",
      "😚",
      "😋",
      "😛",
      "😝",
      "😜",
      "🤪",
      "🤨",
      "🧐",
      "🤓",
      "😎",
      "🥸",
      "🤩",
      "🥳",
      "😏",
      "😒",
      "😞",
      "😔",
      "😟",
      "😕",
      "🙁",
      "☹️",
      "👍",
      "👎",
      "✊",
      "✌️",
      "🤞",
      "🖐️",
      "👆",
      "👇",
      "🤟",
      "👌",
      "👋",
      "👐",
      "✋",
      "🤚",
      "👏",
      "🙌",
      "🤲",
      "👊",
      "🤛",
      "🤜",
      "👦",
      "👧",
      "👨",
      "👩",
      "👶",
      "👵",
      "👴",
      "👲",
      "👳‍♀️",
      "👳‍♂️",
      "🧓",
      "👱‍♀️",
      "👱‍♂️",
      "👮‍♀️",
      "👮‍♂️",
      "👷‍♀️",
      "👷‍♂️",
      "💂‍♀️",
      "💂‍♂️",
      "🕵️‍♀️",
      "🕵️‍♂️",
      "👩‍⚕️",
      "👨‍⚕️",
      "👩‍🌾",
      "👨‍🌾",
      "👩‍🍳",
      "👨‍🍳",
      "👩‍🎓",
      "👨‍🎓",
      "👩‍🎤",
      "👨‍🎤",
      "👩‍🏫",
      "👨‍🏫",
      "👩‍🏭",
      "👨‍🏭",
      "👩‍💻",
      "👨‍💻",
      "👩‍💼",
      "👨‍💼",
      "👩‍🔧",
      "👨‍🔧",
      "👩‍🔬",
      "👨‍🔬",
      "👩‍🎨",
      "👨‍🎨",
      "👩‍🚒",
      "👨‍🚒",
      "👩‍✈️",
      "👨‍✈️",
      "👩‍🚀",
      "👨‍🚀",
      "👩‍⚖️",
      "👨‍⚖️",
      "👰",
      "🤵",
      "👼",
      "🤰",
      "🙇‍♀️",
      "🙇‍♂️",
      "💁‍♀️",
    ];

    return (
      <div>
        {stickers.map((sticker, index) => (
          <button key={index} onClick={() => onStickerClick(sticker)}>
            {sticker}
          </button>
        ))}
      </div>
    );
  };

  const onStickerClick = (sticker: string) => {
    setMessage(message + sticker);
    setShowStickerPicker(false);
    textInput.current.focus();
  };

  useEffect(() => {
    socket.connect();
    console.log("Printed");

    socket?.on("connect", function () {
      console.log("CLIENT: connected");
    });

    socket.on("newMsg", (new_message: ChatMessage) => {
      console.log("CLIENT: new message");
      messageLists.push(
        // @ts-ignore
        <NewMessage new_message={new_message} key={messageLists.length} />
      );

      setMessageLists([...messageLists]);
    });

    socket.on("greetMsg", (msg: ChatGreetMsg) => {
      console.log("CLIENT: greet message");
      messageLists.push(
        // @ts-ignore
        <Tag
          color="cyan"
          style={{
            width: "50%",
            textAlign: "start",
            fontSize: "large",
            fontFamily: "serif",
          }}
        >
          {msg.text}, dear {verifiedMemberData?.mb_name ?? "guest"}
        </Tag>
      );
      setMessageLists([...messageLists]);
    });

    socket?.on("infoMsg", (msg: ChatInfoMsg) => {
      console.log("CLIENT: info message");

      setOnlineUsers(msg.total);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  /** HANDLERS **/
  const getInputMessageHandler = useCallback(
    (e: any) => {
      const text = e.target.value;
      setMessage(text);
    },
    [message]
  );

  const getKeyHandler = (e: any) => {
    try {
      if (e.key === "Enter") {
        // alert(e.target.value);
        assert.ok(message, Definer.input_err3);
        onClickHandler();
      }
    } catch (err: any) {
      sweetErrorHandling(err).then();
    }
  };

  const onClickHandler = () => {
    try {
      if (!verifiedMemberData) {
        textInput.current.value = "";
        sweetFailureProvider("Please login first", true);
        return false;
      }

      textInput.current.value = "";
      assert.ok(message, Definer.input_err3);

      const mb_image_url =
        verifiedMemberData?.mb_image ?? "/auth/default_user.svg";

      socket.emit("createMsg", {
        msg: message,
        mb_id: verifiedMemberData?._id,
        mb_name: verifiedMemberData?.mb_name,
        mb_image: mb_image_url,
      });

      setMessage("");

      // clean input
      // send message to socket
    } catch (err) {
      console.log(`onClickHandler, ERROR:`, err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Modal
      className="flex flex-col rounded-3xl "
      title="Chat"
      open={chatModal}
      footer={false}
      onCancel={() => dispatch(setChatModal())}
    >
      <div className="flex justify-center items-center   text-3xl font-semibold text-black">
        Live Chat
        <Badge count={onlineUsers} style={{ marginLeft: 20 }} />
      </div>
      <div className="flex flex-col justify-start overflow-hidden p-4">
        <div className="chat_main flex m-2.5">
          <div className="msg_left"></div>
        </div>
        {messageLists}
      </div>
      <div className="flex  w-4/5 m-auto ">
        <Popover
          overlayStyle={{ width: 300 }}
          content={<StickerPicker onStickerClick={onStickerClick} />}
          trigger="click"
        >
          <Button
            type="text"
            className="flex items-center ml-2   "
            icon={<SmileOutlined className="text4xl text-cyan-500 " />}
          />
        </Popover>
        {showStickerPicker && <StickerPicker onStickerClick={onStickerClick} />}
        <Input
          ref={textInput}
          type="text"
          name="message"
          value={message}
          className="bg-gray-100"
          placeholder="Xabar jo'natish"
          onChange={getInputMessageHandler}
          onKeyDown={getKeyHandler}
        />
        <Button
          type="primary"
          className="flex items-center ml-2 rounded-[50%] bg-cyan-500 "
          onClick={onClickHandler}
          icon={<SendOutlined className=" flex justify-center w-8" />}
        />
      </div>
    </Modal>
  );
};

export default Chat;
