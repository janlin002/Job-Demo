// import React, { useState } from "react";
// import "./TaskBoard.styles.scss";
// import Column from "./component/Column";

// const tasks = [
//   {
//     title: "todo",
//     tasks: ["Read chapters for next class"]
//   },
//   {
//     title: "doing",
//     tasks: ["Complete in-class activity", "Brainsotrm project ideas"]
//   },
//   {
//     title: "done",
//     tasks: []
//   }
// ];

// const TaskBoard = () => {
//   const [myTasks, moveMyTask] = useState(tasks);

//   const columns = myTasks.map((tasks, columnIndex) => {
//     const propsToColumn = { tasks, columnIndex };
//     return <Column key={`column ${columnIndex}`} {...propsToColumn} />;
//   });

//   return <div className="task-board">{columns}</div>;
// };

// export default TaskBoard;