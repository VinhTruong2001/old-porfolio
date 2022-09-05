import React from "react";
import TimeLineItem from './TimelineItem'
import './timeline.scss'

function Timeline() {
  const experienceItem = [
    {
      period: "2021/12 - present",
      title: "Remote part-time front-end developer at Cloudjet Solutions",
      achievements: [
        "Participate in 3 blockchain website projects: " + 
          "<a target='_blank' href='https://play.cryptowar.network/'><b>Cryptowars</b></a>, " +
          "<a target='_blank' href='https://dev.openworld.vision/'><b>OpenWorld</b></a>, " +
          "<a target='_blank' href='https://futurefund-fe.pages.dev/'><b>FutureFund</b></a>, ",

        "Learned how to manage a project milestone effectively with " + 
          "<a target='_blank' href='https://www.notion.so/'><b>Notion</b></a>, " ,
        "Learned how to use Github effectively to manage a project.",
        "Had knowledge about how to organize and build a website using VueJS and NextJS",
        "First time working in Agile model.",
      ]
    },
    {
      period: "2019/08 - present",
      title: "Information security, University of Information and Technology",
      achievements: [
        "Had knowledge about how to learn a new programming language effectively.",
        "Learned about network.",
        "Learned about some encryption methods and hash functions.",
        "Learned how to build a window application by C# WinForms (Build a drawing together software via Internet - Course project).",
        "Learned how to build and deploy a web application with Django.",
        "Had knowledge in protecting web application from some basic attacks.",
      ]
    },
    {
      period: "2021/07 - 2021/10",
      title: "Learn ReactJS via Internet (YouTube, Documents, fullstack.edu.vn,... )",
      achievements: [
        "Had knowledge about how to organize and build a website using ReactJS.",
        "Had some knowledge about React Hooks, React DOM, Component and Props.",
        "Learned about Tailwind CSS.",
        "Build social network website by ReactJS and Google Firebase.",
        "Build a delivery drinks website and its admin page.",
      ]
    },
    {
      period: "2020/12 – 2021/02",
      title: "Finish the basic JavaScript course at fullstack.edu.vn",
      achievements: [
        "Learn the basic of JavaScript language & ES6.",
        "Learn how to fetch data from API.",
        "Build a form validation.",
        "Build a basic music player page."
      ]
    },
    {
      period: "2020/12 – 2021/02",
      title: "Finish HTML & CSS course at fullstack.edu.vn",
      achievements: [
        "Learned the basic of HTML & CSS.", 
        "Had knowledge about grid.",
        "Learned how to build a responsive website.", 
        "Build a static web page of Shopee homepage."

      ]
    },
  ]
    
  return (
    <div className="timeline">
      { experienceItem.map((item, index) => (
        <TimeLineItem 
          key={item.period}
          index={index}
          period={item.period}
          title={item.title}
          achievements={item.achievements}
        />
      ))}
    </div>
  );
}

export default Timeline;
