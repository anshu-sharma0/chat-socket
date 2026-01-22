export default function ChatList({ chats, activeChat, setActiveChat }) {
  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map(chat => (
        <div
          key={chat.id}
          onClick={() => setActiveChat(chat)}
          className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100
            ${activeChat.id === chat.id ? "bg-gray-200" : ""}`}
        >
          <img src={chat.avatar} className="w-12 h-12 rounded-full" />
          
          <div className="flex-1">
            <h3 className="font-medium">{chat.name}</h3>
            <p className="text-sm text-gray-500 truncate">
              {chat.messages[chat.messages.length - 1]?.text}
            </p>
          </div>

          {chat.unread > 0 && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              {chat.unread}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
