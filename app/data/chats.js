export const chats = [
  {
    id: 1,
    name: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=3",
    online: true,
    unread: 2,
    messages: [
      { id: 1, text: "Hey! Kaise ho?", sender: "other", time: "10:00 AM" },
      { id: 2, text: "Main badhiya, tum?", sender: "me", time: "10:01 AM" },
      { id: 3, text: "Sab badiya 😄", sender: "other", time: "10:02 AM" }
    ]
  },
  {
    id: 2,
    name: "Anjali Verma",
    avatar: "https://i.pravatar.cc/150?img=5",
    online: false,
    unread: 0,
    messages: [
      { id: 1, text: "Meeting kab hai?", sender: "other", time: "Yesterday" },
      { id: 2, text: "Kal 11 baje", sender: "me", time: "Yesterday" }
    ]
  }
];
