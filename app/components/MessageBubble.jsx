export default function MessageBubble({ message }) {
  const isMe = message.sender === "me";

  return (
    <div className={`flex mb-3 ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-xs text-sm
          ${isMe ? "bg-green-500 text-white" : "bg-white border"}`}
      >
        <p>{message.text}</p>
        <span className="block text-xs text-right opacity-70 mt-1">
          {message.time}
        </span>
      </div>
    </div>
  );
}
