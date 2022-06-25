const qBank = [
  {
    question:"What does HTML stand for?",
    answers:["Hyper Text Preprocessor","Hyper Text Markup Language", "Hyper Text Multiple Language",
     "Hyper Tool Multi Language"],
     correct:"Hyper Text Markup Language",
     questionId: "5889091"
     },
     {
     question:"What does CSS stand for?",
     answers:["Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
    correct: "Cascading Style Sheet",
    questionId: "5889092"
     },
     {
     question:"What does PHP stand for?",
     answers:[ "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
     correct:"Hypertext Preprocessor",
     questionId: "5889093"
     },
     {
      question:"What does SQL stand for?",
  answers:[ "Stylish Question Language",
   "Stylesheet Query Language",
   "Statement Question Language",
   "Structured Query Language",
  ],
  correct:"Structured Query Language",
  questionId:"5889094"
     },
     {
      question:"What does XML stand for?",
  answers:[ "eXtensible Markup Language",
   "eXecutable Multiple Language",
   "eXTra Multi-Program Language",
   "eXamine Multiple Language",
  ],
  correct: "eXtensible Markup Language",
  questionId: "5889095"
     },
  {
    question:
      "Which of the following is the correct name of React.js?   ",
    answers: ["React", "React.js", "ReactJs", "All of the above"],
    correct: "All of the above",
    questionId: "5889096"
  },
  {
    question:
      "What of the following is used in Reactjs to increase performane?",
    answers: ["Original DOM", "Virtual DOM", "Both A and B", "None of the above"],
    correct: "Virtual DOM",
    questionId: "5889097"
  },
  {
    question:
      "Which of the following keyword is used to creat a class inheritance?",
    answers: ["Create", "Inherits", "Extends", "This"],
    correct: "Extends",
    questionId: "5889098"
  },
  {
    question: "What are the two ways to handle data in React?",
    answers: [
      "State & Props",
      "Service & Component",
      "State & Service",
      "State & Component"
    ],
    correct: "State & Props",
    questionId: "5889099"
  },
  {
    question: "Which of the following is used to pass data to a component from outside in React.js?",
    answers: ["SetState", "Render with arguments", "Props", "PropTypes"],
    correct: "Props",
    questionId: "58890910"
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
