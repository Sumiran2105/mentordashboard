import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /* =========================
     Mentor Info
  ========================== */
  mentorInfo: {
    id: "MTR001",
    name: "Hardik Singh",
    role: "Mentor",
    avatar: "https://i.pravatar.cc/100",
    phone: "+91 98765 43210",
    email: "tMx5p@example.com",
    gender: "Male",
  },

  /* =========================
     Dashboard Data
  ========================== */
  sessions: [
    {
      id: 1,
      daysLeft: "1 Day Left",
      time: "Tue, Jan 15 @ 12:00 PM",
      title: "Typing: How to increase your typing speed",
    },
    {
      id: 2,
      daysLeft: "4 Days Left",
      time: "Thu, Jan 18 @ 12:00 PM",
      title: "How to become an exceptional product manager?",
    },
    {
      id: 3,
      daysLeft: "6 Days Left",
      time: "Sun, Jan 20 @ 2:00 PM",
      title: "Design Thinking for Innovation",
    },
  ],

  /* =========================
     Video Discussions
     (NOT chat)
  ========================== */
 discussions: [
  {
    id: "D1",
    studentId: "STD1",
    studentName: "Muskan Agarwal",
    videoId: "VID101",
    videoTitle: "JavaScript Closures Explained",

    message: "Can you explain closures again?",
    createdAt: "2026-01-06T10:30:00Z",

    replies: [
      {
        id: "R1",
        sender: "mentor",
        text: "Sure, I’ll explain with examples in next class.",
        createdAt: "2026-01-06T11:00:00Z",
      },
    ],
  },
],


  recommendations: ["Books", "Videos", "Courses"],

  /* =========================
     Students
  ========================== */
  students: [
    {
      id: "STD1",
      name: "Aarav Mehta",
      email: "aarav@gmail.com",
      phone: "9876543210",
      parentName: "Rajesh Mehta",
      parentPhone: "9876500000",
      batch: "Batch 1",

      assignmentScore: 85,
      quizScore: 78,

      weeklyAssignments: [
        { week: "Week 1", title: "JS Basics", score: 80, status: "Submitted" },
        { week: "Week 2", title: "React Intro", score: 90, status: "Submitted" },
        { week: "Week 3", title: "Redux Toolkit", score: null, status: "Pending" },
      ],

      weeklyQuizzes: [
        { week: "Week 1", score: 75 },
        { week: "Week 2", score: 85 },
        { week: "Week 3", score: 0 },
      ],
    },
    {
      id: "STD2",
      name: "Ananya Sharma",
      email: "ananya@gmail.com",
      phone: "9898989898",
      parentName: "Suresh Sharma",
      parentPhone: "9898900000",
      batch: "Batch 2",

      assignmentScore: 92,
      quizScore: 88,

      weeklyAssignments: [
        { week: "Week 1", title: "JS Basics", score: 95, status: "Submitted" },
        { week: "Week 2", title: "React Intro", score: 90, status: "Submitted" },
      ],

      weeklyQuizzes: [
        { week: "Week 1", score: 88 },
        { week: "Week 2", score: 90 },
      ],
    },
  ],

  /* =========================
     Calendar
  ========================== */
  calendar: {
    view: "month",
    currentDate: "2026-01-01",
    events: [
      {
        id: "E1",
        title: "React Basics Live Class",
        type: "class",
        date: "2026-01-06",
        startTime: "19:00",
        endTime: "20:00",
      },
      {
        id: "E2",
        title: "JS Practice Assignment",
        type: "assignment",
        date: "2026-01-06",
        allDay: true,
      },
      {
        id: "E3",
        title: "Redux Toolkit Live",
        type: "class",
        date: "2026-01-08",
        startTime: "18:00",
        endTime: "19:00",
      },
    ],
  },

  /* =========================
     Messages (Chat System)
  ========================== */
  messages: {
    activeConversationId: null,

    conversations: [
      {
        id: "STD1",
        name: "Aarav Mehta",
        lastMessage: "Thank you sir!",
        updatedAt: "2026-01-06T11:30:00Z",
        unreadCount: 2,
        messages: [
          {
            id: 1,
            sender: "student",
            text: "Sir, I didn’t understand closures",
            time: "10:00 AM",
            read: false,
          },
          {
            id: 2,
            sender: "student",
            text: "Can you explain once more?",
            time: "10:02 AM",
            read: false,
          },
        ],
      },
      {
        id: "STD2",
        name: "Ananya Sharma",
        lastMessage: "Assignment submitted",
        updatedAt: "2026-01-06T09:00:00Z",
        unreadCount: 0,
        messages: [
          {
            id: 1,
            sender: "student",
            text: "I’ve submitted the assignment",
            time: "9:00 AM",
            read: true,
          },
        ],
      },
    ],
  },

  notifications: [
  {
    id: "N1",
    type: "student",
    title: "New student added",
    message: "Aarav Mehta has joined your course",
    createdAt: "2026-01-07T10:30:00Z",
    read: false,
    link: "/students/STD1",
  },
  {
    id: "N2",
    type: "discussion",
    title: "New discussion created",
    message: "Question on Redux Toolkit video",
    createdAt: "2026-01-07T09:45:00Z",
    read: false,
    link: "/discussions",
  },
  {
    id: "N3",
    type: "video",
    title: "New video added",
    message: "Advanced React Hooks uploaded",
    createdAt: "2026-01-06T18:10:00Z",
    read: true,
    link: "/videos",
  },
  ],

  videos: [
  {
    id: "VID101",
    title: "JavaScript Closures Explained",
    module: "Week 3",
    duration: "18:25",
    status: "Published",
  },
  {
    id: "VID102",
    title: "Redux Toolkit – Best Practices",
    module: "Week 4",
    duration: "22:10",
    status: "Published",
  },
  {
    id: "VID103",
    title: "Advanced React Hooks",
    module: "Week 5",
    duration: "19:40",
    status: "Draft",
  },
],

};

const mentorSlice = createSlice({
  name: "mentor",
  initialState,

  reducers: {
    /* =========================
       Calendar Controls
    ========================== */
    setCalendarView: (state, action) => {
      state.calendar.view = action.payload;
    },

    nextMonth: (state) => {
      const d = new Date(state.calendar.currentDate);
      d.setMonth(d.getMonth() + 1);
      state.calendar.currentDate = d.toISOString().slice(0, 10);
    },

    prevMonth: (state) => {
      const d = new Date(state.calendar.currentDate);
      d.setMonth(d.getMonth() - 1);
      state.calendar.currentDate = d.toISOString().slice(0, 10);
    },
    
    markNotificationRead: (state, action) => {
  const notif = state.notifications.find(
    (n) => n.id === action.payload
  );
  if (notif) notif.read = true;
},
    /* =========================
       Messages Actions
    ========================== */
    selectConversation: (state, action) => {
      state.messages.activeConversationId = action.payload;

      const convo = state.messages.conversations.find(
        (c) => c.id === action.payload
      );

      if (convo) {
        convo.unreadCount = 0;
        convo.messages.forEach((m) => {
          m.read = true;
        });
      }
    },

    sendMessage: (state, action) => {
      const { conversationId, text } = action.payload;

      const convo = state.messages.conversations.find(
        (c) => c.id === conversationId
      );

      if (!convo) return;

      convo.messages.push({
        id: Date.now(),
        sender: "mentor",
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        read: true,
      });

      convo.lastMessage = text;
      convo.updatedAt = new Date().toISOString();
    },

    addDiscussionReply: (state, action) => {
      const { discussionId, text } = action.payload;

      const discussion = state.discussions.find(
        (d) => d.id === discussionId
      );

      if (!discussion) return;

      discussion.replies.push({
        id: Date.now(),
        sender: "mentor",
        text,
        createdAt: new Date().toISOString(),
      });
    },

    updateMentorProfile: (state, action) => {
      state.mentorInfo = {
        ...state.mentorInfo,
        ...action.payload,
      };
    },
  },
});

/* =========================
   Exports
========================== */
export const {
  updateMentorProfile,
  setCalendarView,
  nextMonth,
  prevMonth,
  selectConversation,
  sendMessage,
  markNotificationRead,
  addDiscussionReply,
} = mentorSlice.actions;

export default mentorSlice.reducer;
