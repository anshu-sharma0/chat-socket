import { useState } from "react";
export default function MessageInput({ activeChat, setActiveChat }) {
  const [message, setMessage] = useState("");

  const sendMsg = () => {
    if (!message.trim()) {
      return
    }

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: "me",
      timestamp: new Date().toISOString(),
    }

    const updatedChat = {
      ...activeChat,
      messages: [...(activeChat.messages || []), newMessage],
    }

    setActiveChat(updatedChat);
    setMessage("");
  }

  return (
    <div className="p-4 flex items-center gap-3 border-t border-[#c4c4c6] bg-white">
      <button className="text-xl">😊</button>

      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 px-4 py-2 rounded-full bg-gray-100 outline-none"
      />

      <button className="bg-slate-500 text-white px-4 py-2 rounded-full cursor-pointer" onClick={sendMsg}>
        Send
      </button>
    </div>
  );
}
