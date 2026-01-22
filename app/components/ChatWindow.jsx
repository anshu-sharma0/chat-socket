import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

export default function ChatWindow({ activeChat }) {
  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader chat={activeChat} />

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {activeChat.messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      <MessageInput />
    </div>
  );
}
