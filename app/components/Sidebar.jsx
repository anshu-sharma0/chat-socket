import ChatList from "./ChatList";

export default function Sidebar({ chats, activeChat, setActiveChat }) {
  return (
    <div className="w-1/3 md:w-1/4 bg-white border-r border-[#e5e7eb] flex flex-col">

      {/* Profile */}
      <div className="p-4 flex items-center gap-3 border-b border-[#e5e7eb]">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <h2 className="font-semibold">My Profile</h2>
      </div>

      {/* Search */}
      <div className="p-3">
        <input
          type="text"
          placeholder="Search chats"
          className="w-full px-3 py-2 rounded-lg bg-gray-100 outline-none"
        />
      </div>

      {/* Chat List */}
      <ChatList
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
    </div>
  );
}
