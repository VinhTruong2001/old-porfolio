import React from "react";

function TimelineItem({ index, period, title, achievements }) {
  return (
    <div
      className={`timeline__container ${index % 2 === 0 ? "left" : "right"} timeline--step${index+1}`}
    >
      <div className="timeline__header">
        <div className="timeline__index">
          0{index + 1}
        </div>
        <div>
          <div className="w-full">
            {period}
          </div>
        <h2 className="font-bold">{title}</h2>
        </div>
      </div>
      <div className="timeline__content">
        <ul>
          {achievements.map(achievement => 
            <li 
              className="list-disc"
              dangerouslySetInnerHTML={{ __html: achievement }}  
            >
              
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TimelineItem;
