export default function ChatHeader({ chat }: any) {
  return (
    <div className="p-4 flex items-center gap-3 border-b border-[#c4c4c6] bg-white">
      <img src={chat.avatar} className="w-10 h-10 rounded-full" />
      <div>
        <h3 className="font-semibold">{chat.name}</h3>
        <p className="text-xs text-gray-500">
          {chat.online ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
}
