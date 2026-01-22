export default function MessageInput() {
  return (
    <div className="p-4 flex items-center gap-3 border-t bg-white">
      <button className="text-xl">😊</button>

      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 px-4 py-2 rounded-full bg-gray-100 outline-none"
      />

      <button className="bg-green-500 text-white px-4 py-2 rounded-full">
        Send
      </button>
    </div>
  );
}
