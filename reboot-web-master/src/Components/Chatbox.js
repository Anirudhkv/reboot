import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
class Chatbox extends React.Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Hi there!!! ",
            trigger: "2"
          },
          {
            id: "2",
            message: "What's your name? ",
            trigger: "3"
          },
          {
            id: "3",
            user: true,
            trigger: "4"
          },
          {
            id: "4",
            message: "Hi {previousValue}, nice to meet you!",
            trigger: "6"
          },
          {
            id: "6",
            message: "How can I help you? :)",
            trigger: "7"
          },
          {
            id: "7",
            options: [
              { value: 1, label: "Guide to explore", trigger: "8" },
              { value: 2, label: "Report a problem", trigger: "9" },
              { value: 3, label: "Or any other", trigger: "10" }
            ]
          },
          {
            id: "8",
            message: "Which genre do you belong?",
            trigger: "11"
          },
          {
            id: "9",
            message:
              "We are extremly sorry for the inconvinience.We will direct you to our representative in a sec",
            end: true
          },
          {
            id: "10",
            message: "We will direct you to our representative in a sec",
            end: true
          },
          {
            id: "11",
            options: [
              { value: 1, label: "Tourist", trigger: "12" },
              { value: 2, label: "Service provider", trigger: "13" },
              { value: 3, label: "Or any other", trigger: "14" }
            ]
          },
          {
            id: "12",

            component: <div> This is an example component </div>,
            end: true
          },
          {
            id: "13",
            message: "Welcome",
            end: true
          },
          {
            id: "14",

            component: <a href="/">Click here</a>,
            end: true
          }
        ]}
      />
    );
  }
}

export default Chatbox;
