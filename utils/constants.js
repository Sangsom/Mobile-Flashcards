export const STORE_KEY = "@MobileFlashCard:Sangsom";
export const NOTIFICATION_KEY = "@MobileFlashCardsNotification:Sangsom";

export const image = require("../assets/images/bg_image.jpg");

export const initialDecks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};
