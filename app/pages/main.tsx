'use client';
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import { chats } from "../data/chats";

export default function App() {
  const [activeChat, setActiveChat] = useState(chats[0]);

  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
      <ChatWindow activeChat={activeChat} />
    </div>
  );
}
